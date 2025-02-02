import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./Core/Styles/index.css";
import App from "./App.jsx";
import store from "./Core/GlobalStates/Store.js";
import { ToastManager } from "./Core/ui/Toast/ToastManager.jsx";
import { ErrorBoundary } from "react-error-boundary";
import HandleError from "./Core/ui/HandleError.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={HandleError}
      onReset={() => window.location.replace("/")}
      y
    >
      <Provider store={store}>
        <ToastManager />
        <App />
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
);
