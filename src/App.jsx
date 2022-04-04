import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./componenets/Navbar/Navbar";
import Card from "./componenets/Card/Card";
import MainDiv from "./componenets/Main/main.styles";
import Sort from "./componenets/Sort/Sort";
import Footer from "./componenets/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <MainDiv>
        <Sort />
        <Card />
      </MainDiv>
      <Footer />
    </>
  );
}

export default App;
