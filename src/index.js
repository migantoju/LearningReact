import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

// Redux store
import configureStore from "./Shared/redux/configStore";

// Routes
import AppRoutes from "./routes";

// Configuring Redux Store
const store = configureStore(window.initialState);

// DOM
const rootElement = document.getElementById("root");

// App wrapper
const renderApp = Component => {
  render(
    <Provider store={store}>
      <Router>
        <Component />
      </Router>
    </Provider>,
    rootElement
  );
};

renderApp(AppRoutes);
