import React from "react";
import "../styles/styles-components/SliderStores.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import stores from "../data/stores.json";
import Stores from "./Stores";

function SliderStores() {
  return (
    <div
      class="uk-slider-container-offset slider-stores"
      uk-slider=" index: 4; "
    >
      <div
        class="uk-position-relative uk-visible-toggle uk-light uk-slider-container-offset"
        tabindex="-1"
      >
        <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid">
          {stores.map((store) => (
            <Stores img={store.img} store={store.store} />
          ))}
        </ul>
        <button
          class="uk-position-center-left uk-position-small uk-hidden-hover arrow-button"
          uk-slidenav-previous
          uk-slider-item="previous"
        >
          <MdArrowBackIosNew size="20px" />
        </button>
        <button
          class="uk-position-center-right uk-position-small uk-hidden-hover arrow-button"
          uk-slidenav-next
          uk-slider-item="next"
        >
          <MdArrowForwardIos size="20px" />
        </button>
      </div>
    </div>
  );
}

export default SliderStores;
