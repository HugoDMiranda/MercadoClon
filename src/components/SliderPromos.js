import React from "react";
import "../styles/styles-components/SliderPromos.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

function SliderPromos() {
  return (
    <div
      uk-slider="center: true; autoplay: true; autoplay-interval: 2000;"
      className="slider-promos"
    >
      <div
        class="uk-position-relative uk-visible-toggle uk-light"
        tabindex="-1"
      >
        <ul class="uk-slider-items">
          <li>
            <img src="img/promos/promo1.png" alt="" />
          </li>
          <li>
            <img src="img/promos/promo2.png" alt="" />
          </li>
          <li>
            <img src="img/promos/promo3.png" alt="" />
          </li>
          <li>
            <img src="img/promos/promo4.png" alt="" />
          </li>
        </ul>

        <button
          class="uk-position-center-left uk-position-small uk-hidden-hover arrow-button previous"
          uk-slidenav-previous
          uk-slider-item="previous"
        >
          <MdArrowBackIosNew size="20px" />
        </button>
        <button
          class="uk-position-center-right uk-position-small uk-hidden-hover arrow-button next"
          uk-slidenav-next
          uk-slider-item="next"
        >
          <MdArrowForwardIos size="20px" />
        </button>
        <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin uk-position-bottom selector"></ul>
      </div>
    </div>
  );
}

export default SliderPromos;
