import React from "react";
import SliderStores from "../components/SliderStores";
import SliderPromos from "../components/SliderPromos";
import "../styles/Home.css";
import MediosDePago from "../components/MediosDePago";

function Home() {
  return (
    <div className="home">
      <SliderPromos />
      <div className="home-payment">
        <MediosDePago />
        <MediosDePago />
        <MediosDePago />
        <MediosDePago />
      </div>
      <div className="home-stores">
        <h3>Las mejores tiendas te esperan</h3>
        <SliderStores />
      </div>
    </div>
  );
}

export default Home;
