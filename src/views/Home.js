import React from "react";
import SliderStores from "../components/SliderStores";
import SliderPromos from "../components/SliderPromos";
import "../styles/Home.css";
import MediosDePago from "../components/MediosDePago";
import { BsFillCreditCard2BackFill, BsBank } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { AiFillPlusCircle } from "react-icons/ai";

function Home() {
  return (
    <div className="home">
      <SliderPromos />
      <div className="home-payment">
        <MediosDePago
          paymentText={`Hasta 48 cuotas`}
          paymentIcon={<BsFillCreditCard2BackFill size={30} />}
        />
        <MediosDePago
          paymentText={`Tranferencia desde tu banco`}
          paymentIcon={<BsBank size={30} />}
        />
        <MediosDePago
          paymentText={`Paga en efectivo`}
          paymentIcon={<GiTakeMyMoney size={30} />}
        />
        <MediosDePago
          paymentText={`Mas medios de pago`}
          paymentIcon={<AiFillPlusCircle size={30} />}
        />
      </div>
      <div className="home-stores">
        <h3>Las mejores tiendas te esperan</h3>
        <SliderStores />
      </div>
    </div>
  );
}

export default Home;
