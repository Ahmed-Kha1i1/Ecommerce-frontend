import { BrowserRouter } from "react-router-dom";
import Router from "./Core/Routes/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { defaultTimeStale } from "./Constants";
import AutoLoginHandler from "./Core/Handlers/AutoLoginHandler";
import MergeCartsHandler from "./Core/Handlers/MergeCartsHandler.jsx";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: defaultTimeStale,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Router />
        <AutoLoginHandler />
        <MergeCartsHandler />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
