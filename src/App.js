import React, { Component } from "react";
import "./component/notes";
import "./component/notes.css";

class App extends Component {
  render() {
    return (
      <div className="notes-app">
        <notes />
      </div>
    );
  }
}

export default App;