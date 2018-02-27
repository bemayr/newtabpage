import React from "react";

const Icon = ({ name, address, icon }) => (
  <a
    href={address}
    tabIndex="1"
    style={{
      color: "white",
      textDecoration: "none",
      textTransform: "uppercase",
      margin: ".7em",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transition: "all .05s ease-in-out",
      opacity: 0.95,
      outline: "0px solid transparent",
    }}
    >
    <div
      className="app-icon-wrapper"
      style={{
        marginBottom: "-3px"
      }}
      dangerouslySetInnerHTML={{ __html: icon }}
    />
    <label
      style={{
        display: "block",
        cursor: "pointer",
        fontSize: ".5em",
        textAlign: "center",
        color: "white"
      }}
    >
      {name}
    </label>
  </a>
);

export default Icon;
