import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '@/src/components/UI';

import { useNetInfo } from '@react-native-community/netinfo';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getDataAction, putDataAction } from '@/src/axios';

import { querySettings } from '@/src/constants';
import { onlineManager } from '@tanstack/react-query';

const {queryClient} = querySettings;
let i = 1,
    status = false;

const getThhis = async () => {
    try {
        const data = await getDataAction('https://khudenko41.bld.spl.co.ua/api/2.0/admin/scheduling/tasks');
        return data.data
    } catch (err) {
        return []
    }
}

export const putThis = (variables: {item: any, title: string}) => putDataAction(`https://khudenko41.bld.spl.co.ua/api/2.0/admin/scheduling/tasks/${variables.item.id}`, {title: variables.title});

const updateLocalExerciseList = (
    item: any, title: string,
    isNotSynced?: boolean,
  ) => {
    // console.log('LOCAL EXERCISES: ', item)
    queryClient.setQueryData(['tasks'], exercisesList => {
        return exercisesList?.map(exercise => {
            if (exercise.id === item.id) {
                return {...exercise, title, isNotSynced};
            }
            return exercise;
        });
    });
};


const index = () => {
    const [mutLength, setMutLength] = useState(queryClient.getMutationCache().getAll().length);
    const [mutLengthOnStart, setMutLengthOnStart] = useState(queryClient.getMutationCache().getAll().length);

    const {isConnected} = useNetInfo();
    const {data} = useQuery({
        queryKey: ['tasks'],
        queryFn: getThhis,
    });
    // console.log('BASIC DATA', data);

    const {mutate, error} = useMutation({
        mutationKey: ['setTask'],
        mutationFn: putThis,
        onMutate: async (payload: {item: any, title: string}) => {
            await queryClient.cancelQueries(['tasks']);
            updateLocalExerciseList(payload.item, payload.title, false);
            setMutLengthOnStart(queryClient.getMutationCache().getAll().length)
        },  
        onSuccess() {
            // console.log('DATA:', data)
            // updateLocalExerciseList(data.item, data.title, true);
            queryClient.invalidateQueries(['tasks'])
            setMutLength(queryClient.getMutationCache().getAll().length)
        },
    });
    
    if (!data) return <></>

  return (
    <View style={{flex: 1}}>
        <View style={{justifyContent: 'center',flexDirection: 'row', paddingBottom: 20}}>
            <Text style={{color: 'black', width: '33%'}}>TASK NAME</Text>
            <Text style={{color: 'black', width: '33%'}}>TASK ID</Text>
            <Text style={{color: 'black', width: '33%'}}>IS SYNCED?</Text>
        </View>
        {data.map(item => (
            <View style={{justifyContent: 'center',flexDirection: 'row'}}>
                <Text style={{color: 'black', width: '33%'}}>{item.title}</Text>
                <Text style={{color: 'black', width: '33%'}}>{item.id}</Text>
                <Text style={{color: 'black', width: '33%'}}>{String(item.isNotSynced)}</Text>
            </View>
        ))}
        <Button title={'CHANGE'} style={{backgroundColor: 'black'}} onPress={() => mutate({item: data[3], title: 'Change to this' + i++})}/>
        <Button title={'CHANGE ONLINE'} style={{backgroundColor: 'black'}} onPress={() => {
                onlineManager.setOnline(status);
                status = !status;
            }}
        />
        <Button title={'GET MUTATION CACHE'} style={{backgroundColor: 'black'}} onPress={() => {
            console.log(queryClient.getMutationCache().getAll())
        }}/>
        <Button title={'GET MUTATION DEFAULTS'} style={{backgroundColor: 'black'}} onPress={() => {
            console.log(queryClient.getDefaultOptions())
        }}/>
        <Text>Mutation on start length: {mutLengthOnStart}</Text>
        <Text>Mutation length: {mutLength}</Text>
        <Text>Net status: {String(!!isConnected)}</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})
