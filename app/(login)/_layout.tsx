import { Stack } from "expo-router";

import { navigatorSettings } from "@/src/constants";

const LoginLayout = () => <Stack screenOptions={navigatorSettings.doNotShowHeaders}/>;

export default LoginLayout