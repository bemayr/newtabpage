import React from "react";

function getGreeting(time) {
  time = time.getHours() * 100 + time.getMinutes();
  if (time < 400) return "Go to bed";
  else if (time < 1100) return "Good morning";
  else if (time < 1230) return "Enjoy your meal";
  else if (time < 1700) return "Good afternoon";
  else return "Good evening";
}

const Greeting = ({ time }) => (
  <span style={{}}>{!!time ? getGreeting(time) : ""}</span>
);

export default Greeting;
