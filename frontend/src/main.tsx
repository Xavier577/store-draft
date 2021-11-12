import { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./Redux/apps/store";
import App from "./App";
import "./styles/global.css";

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
