import React, { Component } from "react";
import FetchDataContainer from "./containers/FetchDataContainer";

class App extends Component {
  constructor(){
    super();
    this.state = {
      headerStyle: {
        marginLeft: "700px",
        color: "white",
        textAlign: "center"
      }
    }
  }

  render() {
    return (

         
      <div className="wrapper">
        <FetchDataContainer />
      </div>

    );
  }
}

export default App;
