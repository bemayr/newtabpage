import React from "react";
import overlay from "assets/overlay.png";

const Background = () => (
  <div
    style={{
      margin: 0,
      padding: 0,
      zIndex: -1,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "transparent",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat"
    }}
  >
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: `url(${overlay})`,
        backgroundSize: "100% 100%",
        opacity: 0.7
      }}
    />
  </div>
);

export default Background;
