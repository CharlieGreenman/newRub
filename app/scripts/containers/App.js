import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux";
import Environment from "../containers/Environment.js";

class App extends Component {
  render(){
    return(
      <Environment/>
    );
  }
}

function mapStateToProps(state) {
  return{

  }
}

// export default connect(mapStateToProps)(App);

export default App;
