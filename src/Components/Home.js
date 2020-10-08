import React, { Component } from "react";
import HEader from "./HEader";
import Section from "./Section";
import Section2 from "./Section2";
import Section3 from "./Section3";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <HEader />
        <Section />
        <Section2 />
        <Section3 />
      </div>
    );
  }
}
