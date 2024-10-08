import { QueryClient } from "@tanstack/react-query";

import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { asyncStorage } from "../helpers";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      gcTime: Infinity,
    },
  },
});

const persister = createAsyncStoragePersister({
  storage: asyncStorage.storage,
  throttleTime: 3000,
});

export { queryClient, persister };
