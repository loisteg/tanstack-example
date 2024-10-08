import { useEffect } from 'react';
import { Text, View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';

import { onlineManager } from '@tanstack/react-query';
import { querySettings } from '../constants';

import { persistQueryProviderTypes } from '../types'; 
import { putThis } from '@/app/(tabs)';
import { defaultShouldDehydrateMutation, Mutation } from '@tanstack/react-query';

const {queryClient, persister} = querySettings;
const beforeAll = queryClient.getMutationCache().getAll().length;

queryClient.setMutationDefaults(['setTask'], {
    mutationFn: putThis
})
const PersistQueryProvider = ({children}: persistQueryProviderTypes.PersistQueryProviderProps) => {
    useEffect(() => {
       onlineManager.setEventListener(setOnline => NetInfo.addEventListener(state => setOnline(Boolean(state.isConnected))));
    }, []);
     
    return (
        <PersistQueryClientProvider
            onSuccess={() => {
                if (onlineManager.isOnline()) {
                    queryClient
                        .resumePausedMutations()
                        .then(() => queryClient.invalidateQueries())
                }
            }}
            persistOptions={{
                persister,
                dehydrateOptions: {
                    shouldDehydrateMutation: (m: Mutation) => true
                }
            }}
            client={queryClient}
        >
            <View style={{flex: 1}}>
                <Text style={{marginBottom: 20}}>Mutation length before all: {beforeAll}</Text>
                {children}
            </View>
        </PersistQueryClientProvider>
    );
}

export default PersistQueryProvider;