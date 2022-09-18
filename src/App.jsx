import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Switch from "./routes";
import { Provider } from "react-redux";

import store from "./store";
export default function App() {
  return (
    <>
     <Provider store={store}>
      <BrowserRouter>
          <Header/>
          <Switch/>
      </BrowserRouter>
     </Provider>
    </>
  );
}

