import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000,
    },
  },
  mutationCache: new MutationCache({
    onError: (error) => {
      console.log(`Something went wrong: ${error.message}`);
    },
  }),
  queryCache: new QueryCache({
    onError: (error) => {
      console.log(`Something went wrong: ${error.message}`);
    },
  }),
});

export default queryClient;
