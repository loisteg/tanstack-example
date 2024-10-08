/* Usage
  <ScreenContainer
    containerStyle={{...styles}}
    contentContainerStyle={{...styles}}
    useScrollView
    refreshInformation={refreshing: true | false, onRefresh: () => {}}
    keyboardAvoidingView={'none'}
  >
    <View></View>
  </ScreenContainer>
*/

import {useMemo, useCallback} from 'react';
import {StyleSheet, View, ScrollView, RefreshControl, KeyboardAvoidingView} from 'react-native';

import { colors, platformInformation } from '@/src/constants';

import { PropsWithChildren } from 'react';
import { pageContainerTypes } from '@/src/types';



const {IS_IOS} = platformInformation;

const PageContainer: pageContainerTypes.TPageContainerProps = props => {
  const {
    children,
    containerStyle,
    contentContainerStyle,
    useScrollView = false,
    refreshInformation,
    keyboardAvoidingView
  } = props;

  const KeyboardWrapper = useCallback(
    ({ children }: PropsWithChildren<{}>) => {
      const config = {
        both: (
          <KeyboardAvoidingView behavior={IS_IOS ? 'padding' : 'height'}>
            {children}
          </KeyboardAvoidingView>
        ),
        none: <>{children}</>,
        android: IS_IOS ? (
          <>{children}</>
        ) : (
          <KeyboardAvoidingView behavior={'height'}>
            {children}
          </KeyboardAvoidingView>
        ),
        ios: !IS_IOS ? (
          <>{children}</>
        ) : (
          <KeyboardAvoidingView behavior={'padding'}>
            {children}
          </KeyboardAvoidingView>
        )
      };

      return config[keyboardAvoidingView ?? 'none'];
    },
    [keyboardAvoidingView]
  );

  const ViewComponent = useMemo(
    () => (useScrollView ? ScrollView : View),
    [useScrollView],
  );

  const RefreshControlComponent = useMemo(() => {
    return useScrollView && refreshInformation ? (
      <RefreshControl {...refreshInformation} />
    ) : undefined;
  }, [useScrollView, refreshInformation]);

  return (
    <KeyboardWrapper>
      <ViewComponent
        style={[styles.screenContainer, containerStyle]}
        contentContainerStyle={useScrollView ? contentContainerStyle : {}}
        refreshControl={RefreshControlComponent}>
        {children}
      </ViewComponent>
    </KeyboardWrapper>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.MAIN_BG,
  },
});

export default PageContainer;
