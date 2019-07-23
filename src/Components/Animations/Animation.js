import React, { Component } from "react";
import "./Animation.css";

class Animation extends Component {
  constructor() {
    super();

    this.state = {
      show: false
    };
  }

  componentWillUpdate(newProps, newState) {
    if (!newState.show) {
      document.getElementById("fade").style = "opacity: 1;";
    } else {
      document.getElementById("fade").style = "opacity: 0;";
    }
  }
}

export default Animation;
