import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/src/constants';
import { textStyles } from '@/src/styles';

import { sectionSeparatorTypes } from '@/src/types';

const SectionSeparator: sectionSeparatorTypes.TSecitonSeparator = ({text, style}) => {
    if (!text) return (
        <View style={[styles.sectionSeparatorContainer, style]}>
            <View style={styles.sectionSeparatorLine}/>
        </View>
    )

  return (
    <View style={[styles.sectionSeparatorContainer, style]}>
        <View style={styles.sectionSeparatorLine}/>
        <Text style={[styles.sectionSeparatorText, textStyles.textSubheadingLarge]}>{text.toUpperCase()}</Text>
        <View style={styles.sectionSeparatorLine}/>
    </View>
  )
}

const styles = StyleSheet.create({
    sectionSeparatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionSeparatorLine: {
        height: 2,
        width: '100%',
        backgroundColor: colors.WHITE
    },
    sectionSeparatorText: {
        marginHorizontal: 16,
        color: colors.WHITE
    }
});

export default SectionSeparator