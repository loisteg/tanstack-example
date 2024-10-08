import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconButton from './IconButton';

import { colors } from '@/src/constants';

import { textStyles } from '@/src/styles';

import { quantityPickerTypes } from '@/src/types';

const QuantityPicker: quantityPickerTypes.TQuantityPicker = ({onIncrease, onDecrease, value, style}) => {

    const handleChangeValue = (type: 'increase' | 'decrease') => {
        if (type === 'increase') {
            onIncrease(value + 1)

            return;
        }

        onDecrease(value - 1)
    };

  return (
    <View style={[styles.quantityPickerContainer, style]}>
      <IconButton name={'Minus'} onPress={() => handleChangeValue('decrease')}/>
      <Text style={[styles.quantityPickerText, textStyles.textHeadlineSmall]}>{value}</Text>
      <IconButton name={'Plus'} onPress={() => handleChangeValue('increase')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    quantityPickerContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    quantityPickerText: {
        color: colors.WHITE
    }
});

export default QuantityPicker;