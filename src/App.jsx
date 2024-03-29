import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Cards } from "./Cards";
import { Footer } from "./Footer";

const App = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container">
        <Jumbotron />
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default App;
