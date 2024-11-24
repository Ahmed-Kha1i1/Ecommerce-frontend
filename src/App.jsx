import { BrowserRouter } from "react-router-dom";
import Router from "./Core/Routes/Router";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import queryClient from "./queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
