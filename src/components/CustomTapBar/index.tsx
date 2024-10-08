import { StyleSheet, View } from 'react-native';
import CustomTab from './CustomTab';

import { colors, appRoutes, expoRouter } from '../../constants';

import { customTapBarTypes } from '@/src/types';

const CustomTapBar = (props: customTapBarTypes.CustomTabBarProps) => {
  const {state: {index: activeIndex, routes}} = props;
  const activeRouteName = routes[activeIndex].name;
  
  // console.log('Active route in CustomTapBar: ', activeRouteName);

  return (
    <View style={styles.customTabBar}>
      <CustomTab 
        onPress={() => expoRouter.push()}
        iconName={'Home'}
        isActive={activeRouteName === 'dashboard'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  customTabBar: {
    height: '10%',
    minHeight: 96,
    paddingVertical: 20,
    paddingHorizontal: 45,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '',
  },
});

export default CustomTapBar;