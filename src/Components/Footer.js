import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="phone box three">
          <div className="phon">
            <i className="fa fa-phone pho"></i>
          </div>
          <p>Toll Free 1800 200 1234</p>
        </div>
        <div className="box two">
          <div className="facebook">
            <i class="fa fa-facebook"></i>
          </div>
          <p>www.facebook.com/crigroups</p>
        </div>
        <div className="box one">
          <div className="globe">
            <i className="fas fa-globe"></i>
          </div>
          <p>www.crigroups.com</p>
        </div>
      </footer>
    );
  }
}
