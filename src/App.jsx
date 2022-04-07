import React, { Fragment } from "react";
import Navbar from "components/Navbar/Navbar";
import Card from "components/Card/Card";
import MainDiv from "components/Main/main.styles";
import Sort from "components/Sort/Sort";
import Footer from "components/Footer/Footer";

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
