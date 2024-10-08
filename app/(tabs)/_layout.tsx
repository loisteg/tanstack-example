import { Stack } from "expo-router";

import { navigatorSettings } from "@/src/constants";

const TabsLayout = () => <Stack screenOptions={navigatorSettings.doNotShowHeaders}/>;

export default TabsLayout