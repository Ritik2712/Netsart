import React, { Component } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

export default class Section extends Component {
  render() {
    return (
      <section id="section1">
        <LeftPanel />
        <RightPanel />
      </section>
    );
  }
}
