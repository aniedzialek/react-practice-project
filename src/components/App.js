import React from "react";

export default class App extends React.Component {
  state = {test: 0};    // actually this is run in the constructor thanks to @babel/plugin-proposal-class-properties

  render() {
    return(
      <div>
        <button type="button" onClick={() => this.setState((state) => ({test: state.test + 1}))}>Switch</button>
        <h1>{this.state.test}</h1>
      </div>
    );
  }
}
