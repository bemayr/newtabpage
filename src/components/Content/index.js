import Clock from "../Clock";
import Greeting from "../Greeting";
import React from "react";

class Content extends React.Component {
  timer = undefined;

  constructor() {
    super();
    this.state = this.calculateState();
  }
  calculateState = () => ({
    time: new Date()
  });
  componentDidMount() {
    this.timer = setInterval(() => this.setState(this.calculateState()), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div
        style={{
          cursor: "default"
        }}
      >
        <div
          className="heading"
          style={{
            color: "white",
            textAlign: "center"
          }}
        >
          <div>
            <Clock time={this.state.time} />
            <div
              style={{
                fontSize: "337.5%",
                letterSpacing: 0,
                whiteSpace: "nowrap",
                fontWeight: 500
              }}
            >
              <Greeting time={this.state.time} />, Bernhard.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
