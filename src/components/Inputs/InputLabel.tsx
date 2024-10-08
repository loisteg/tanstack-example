import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '@/src/constants';

const InputLabel = ({label}: {label: string | undefined}) => {
    if (!label) return <></>;

    return (
        <View style={styles.inputLabelContainer}>
            <Text style={styles.inputLabel}>{label}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    inputLabelContainer: {
        position: 'absolute',
        top: 8,
        left: 16,
        zIndex: 1,
        backgroundColor: 'transparent'
    },
    inputLabel: {
        fontFamily: fonts.medium,
        fontSize: 10,
        textAlign: 'left',
        color: ''
    }
});

export default InputLabel;