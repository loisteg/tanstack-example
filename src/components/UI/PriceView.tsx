import { StyleSheet, Text, View } from 'react-native'

import { getCurrencySign } from '@/src/helpers';

import { colors } from '@/src/constants';

import { textStyles } from '@/src/styles';

import { priceViewTypes } from '@/src/types';

const PriceView: priceViewTypes.TPriceView = ({currency, price, style, textStyle}) => {
    if (!currency || !price) return;

    const currencySign = getCurrencySign(currency);
    const allTextStyles = [styles.priceViewText, textStyles.textPriceMedium, textStyle];

  return (
    <View style={[styles.priceViewContainer, style]}>
      <Text style={allTextStyles}>{price}</Text>
      <Text style={allTextStyles}> {currencySign}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    priceViewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceViewText: {
        color: colors.ADDITIONAL
    },
})

export default PriceView
