import { useState, useEffect, useMemo } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { I18nextProvider } from "react-i18next";
import { Stack } from "expo-router";
import PersistQueryProvider from "./PersistQueryProvider";

import { useFonts } from "expo-font";
import i18n, { setI18N } from "@/src/i18n";
import { setUpDateFormat, tokenActions } from "@/src/helpers";

import * as SplashScreen from "expo-splash-screen";
import { colors, navigatorSettings } from "@/src/constants";

SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const [loaded, error] = useFonts({
    // 'InterTight-Bold': require('../assets/fonts/InterTight-Bold.ttf'),
    // 'InterTight-Medium': require('../assets/fonts/InterTight-Medium.ttf'),
    // 'InterTight-Regular': require('../assets/fonts/InterTight-Regular.ttf'),
    // 'InterTight-SemiBold': require('../assets/fonts/InterTight-SemiBold.ttf'),
  });
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepareApp = async () => {
      await setI18N();
      await tokenActions.setAccessTokens({
        access_token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlkIjoxLCJleHAiOjE3MzczODUxMjcsImp0aSI6IjAzN2I5ZjRlMjVhNmVjOWFmMWIzZDdiZTY1NGYzZjg1IiwibW9iaWxlQWNjZXNzIjp0cnVlfQ.2RcJSJ-9ITT36Eg6xymb5s6qYet34aXnGwGsstwL0XU",
        refresh_token: "037b9f4e25a6ec9af1b3d7be654f3f85",
        access_token_expiration: 1737385127,
        refresh_token_expiration: 1737988127,
      });
      await tokenActions.refreshToken();
      setUpDateFormat();
      setAppIsReady(true);
    };

    prepareApp();
  }, []);

  const Content = useMemo(() => {
    if (!(appIsReady && (loaded || error))) return <></>;
    SplashScreen.hideAsync();

    return (
      <I18nextProvider i18n={i18n}>
        <PersistQueryProvider>
          <Stack screenOptions={navigatorSettings.doNotShowHeaders} />
        </PersistQueryProvider>
      </I18nextProvider>
    );
  }, [appIsReady, loaded, error]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.WHITE }}>
        <GestureHandlerRootView>
          <StatusBar />
          {Content}
        </GestureHandlerRootView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default InitialLayout;
