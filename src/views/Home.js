import React from "react";
import SliderStores from "../components/SliderStores";
import SliderPromos from "../components/SliderPromos";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <SliderPromos />

      <div className="home-stores">
        <h3>Las mejores tiendas te esperan</h3>
        <SliderStores />
      </div>
    </div>
  );
}

export default Home;
