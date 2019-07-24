import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { title = "Welcome to React" } = props;

  return (
    <header className="App-header">
      <h1 className="App-title">{title}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/notes">Notes</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/coins">Coins</Link>
        </li>
      </ul>
    </header>
  );
};

// Even with functional components we are able to validate PropTypes
Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
