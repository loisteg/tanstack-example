import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/src/constants';
import { textStyles } from '@/src/styles';

import { counterTypes } from '@/src/types';

const Counter: counterTypes.TCounter = ({counter, style}) => {
  return (
    <View style={[styles.counterWrapper, style]}>
      <Text style={[styles.counterText, textStyles.textBtnSmall]}>{counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    counterWrapper: {
      width: 26,
      height: 26,
      backgroundColor: colors.ADDITIONAL,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center'
    },
    counterText: {
      color: colors.MAIN
    }
});

export default Counter