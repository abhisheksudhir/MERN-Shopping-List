import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
      </div>
    );
  }
}

export default App;
