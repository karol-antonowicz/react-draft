import React from "react";

class Clock extends React.Component {
  state = {
    now: new Date().toLocaleTimeString()
  };

  componentDidMount() {
    this.launchClock();
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  launchClock = () => {
    this.clock = setInterval(() => {
      console.log("tick tock");
      this.setState({
        now: new Date().toLocaleTimeString()
      });
    }, 1000);
  };

  render() {
    return <h1>{this.state.now}</h1>;
  }
}

export default Clock;
