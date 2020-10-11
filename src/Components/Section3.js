import React, { Component } from "react";
import Footer from "./Footer";

export default class Section3 extends Component {
  render() {
    return (
      <section id="section3">
        <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
        <p className="para">
          CHEMICALS & PROCESS <span className="red"> | </span>POWER
          <span className="red"> | </span> WATER & WASTE
          <span className="red"> | </span> WATER<span className="red"> | </span>{" "}
          OILS & GAS
          <span className="red"> |</span> PHARMA SUGARS & DISTILLERIES
          <span className="red"> | </span> PAPER & PULP
          <span className="red"> | </span> MARINE & DEFENCE
          <span className="red"> | </span>
          METAL & MINING<span className="red"> | </span> FOOD & BEVERAGE
          <span className="red"> | </span> PETROCHEMICAL & REFINERIES
          <span className="red"> | </span> SOLAR<span className="red"> |</span>{" "}
          BUILDING <span className="red"> |</span>HVAC{" "}
          <span className="red"> | </span>
          FIRE FIGHTING <span className="red"> | </span>AGRICULTURE &
          RESIDENTIAL
        </p>
        <i class="fa fa-facebook"></i>

        <Footer />
      </section>
    );
  }
}
