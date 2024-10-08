import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '@/src/constants';

import { nameBoxTypes } from '@/src/types';

const NameBox: nameBoxTypes.TNameBox = ({name, backgroundColor, style}) => {
  return (
    <View style={[styles.nameBoxContainer, style, {backgroundColor}]}>
      <Text style={styles.nameBoxText}>{name.slice(0,2).toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  nameBoxContainer: {
    padding: 5,
    borderRadius: 5,
  },
  nameBoxText: {
    fontFamily: fonts.bold,
    fontSize: 12,
    color: colors.WHITE
  }
})

export default NameBox
