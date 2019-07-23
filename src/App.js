import React from "react";
import { element } from "prop-types";
import Header from "./Shared/Components/layout/Header";
import Content from "./Shared/Components/layout/Content";
import Footer from "./Shared/Components/layout/Footer";

const App = props => (
  <div className="App">
    <Header title="Routing" />

    <Content>{props.children}</Content>

    <Footer />
  </div>
);

App.propTypes = {
  children: element
};

export default App;
