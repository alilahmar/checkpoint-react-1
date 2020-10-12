import React from "react";

import NavBar from "./components/navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Carousel1 from "./components/carousel";
import Form1 from "./components/form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Carousel1 />
      <Form1 />
    </div>
  );
}

export default App;
