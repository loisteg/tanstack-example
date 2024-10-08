import { StyleSheet, TouchableOpacity } from 'react-native';
import { IconBox } from '../UI';

import { colors } from '@/src/constants';
import { activeOpacities } from '@/src/styles';

import { customTapBarTypes } from '@/src/types';

const CustomTab: customTapBarTypes.DefaultCustomTab = ({onPress, iconName, isActive}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.defaultCustomTab, {backgroundColor: isActive ? '' : ''}]}
      activeOpacity={activeOpacities.TAB_BAR_BUTTON}
    >
      <IconBox name={iconName} fill={isActive ? '' : ''}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  defaultCustomTab: {
    padding: 8,
    borderRadius: 100,
  }
});

export default CustomTab