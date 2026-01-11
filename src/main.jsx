import { createRoot } from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
      <Toaster />
    </Provider>
  </HashRouter>
);
