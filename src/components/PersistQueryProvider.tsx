import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";

import { onlineManager } from "@tanstack/react-query";
import { querySettings } from "../constants";

import { persistQueryProviderTypes } from "../types";
import { putThis } from "@/app/(tabs)";
import {
  defaultShouldDehydrateMutation,
  Mutation,
} from "@tanstack/react-query";

const { queryClient, persister } = querySettings;

queryClient.setMutationDefaults(["setTask"], {
  mutationFn: putThis,
});
const PersistQueryProvider = ({
  children,
}: persistQueryProviderTypes.PersistQueryProviderProps) => {
  const [beforeAll, setBeforeAll] = useState(0);
  useEffect(() => {
    onlineManager.setEventListener((setOnline) =>
      NetInfo.addEventListener((state) => setOnline(Boolean(state.isConnected)))
    );
  }, []);

  return (
    <PersistQueryClientProvider
      onSuccess={() => {
        const mutations = queryClient
          .getMutationCache()
          .getAll()
          .filter(
            (m) => m.state.status === "idle" || m.state.status === "pending"
          );
        setBeforeAll(mutations.length);

        for (const mutation of mutations) {
          void mutation.continue();
        }

        if (onlineManager.isOnline()) {
          queryClient
            .resumePausedMutations()
            .then(() => queryClient.invalidateQueries());
        }
      }}
      persistOptions={{
        persister,
        dehydrateOptions: {
          shouldDehydrateMutation: (m: Mutation) =>
            defaultShouldDehydrateMutation(m) ||
            m.state.status === "idle" ||
            m.state.status === "pending",
        },
      }}
      client={queryClient}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ marginBottom: 20 }}>
          Mutation length before all: {beforeAll}
        </Text>
        {children}
      </View>
    </PersistQueryClientProvider>
  );
};

export default PersistQueryProvider;
