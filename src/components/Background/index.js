import { noMargin, noPadding, tlrb0 } from "styles/functional";

import React from "react";
import overlay from "assets/overlay.png";

const Background = ({ background }) => (
  <div>
    <div
      style={{
        ...noMargin,
        ...noPadding,
        position: "absolute",
        ...tlrb0,
        zIndex: -2,
        backgroundImage: `url(images/${background.filename})`,
        backgroundColor: "transparent",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat"
      }}
    />
    <div
      style={{
        position: "fixed",
        ...tlrb0,
        background: `url(${overlay})`,
        backgroundSize: "100% 100%",
        opacity: 0.7,
        zIndex: -1
      }}
    />
    <a
      className="background-location"
      target="_blank"
      href={`https://www.openstreetmap.org/search?query=${encodeURIComponent(
        background.location
      )}`}
      style={{
        color: "white",
        position: "absolute",
        right: "2em",
        bottom: "1.2em",
        fontSize: ".9em",
        opacity: 0.5,
        textDecoration: "none",
        cursor: "pointer"
      }}
    >
      {background.location}
    </a>
  </div>
);

export default Background;
