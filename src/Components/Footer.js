import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="phone box three">
          <div className="phon">
            <a href="tel:18002001234">
            <i className="fa fa-phone pho"></i>
            </a>
          </div>
          <a href="tel:18002001234">
          <p>Toll Free 1800 200 1234</p></a>
        </div>
        <div className="box two">
          <div className="facebook">
             <a href='www.facebook.com/crigroups'>
            <i class="fa fa-facebook"></i>
            </a>
          </div>
           <a href='www.facebook.com/crigroups'>
          <p>www.facebook.com/crigroups</p></a>
        </div>
        <div className="box one">
          <div className="globe">
           <a href='www.crigroups.com'> <i className="fas fa-globe"></i></a>
          </div>
           <a href='www.crigroups.com'><p>www.crigroups.com</p></a>
        </div>
      </footer>
    );
  }
}
