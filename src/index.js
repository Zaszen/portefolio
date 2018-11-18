import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppRouter from "./components/presentationals/AppRouter/AppRouter.jsx";

class MyApp extends Component {
    render() {
      return (
        <div id="MyApp">
          <AppRouter/>
        </div>
      );
    }
}

export default MyApp;
const wrapper = document.getElementById("App");
wrapper ? ReactDOM.render(<MyApp />, wrapper) : false;