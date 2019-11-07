import React from "react";
import "./style.sass";

function Header(props) {
  return (
      <div className="ipay88-header-wrapper">
        <div className="ipay88-header-wrapper__image-text">
          <h2>
            <img
              src={require("../../assets/image/ipay88.png")}
              alt=""
            />
            Merchant Portal
          </h2>
        </div>
        <div className="ipay88-header-wrapper__ussername-header">
          <p>
            <strong>Dear Frederick Tang Sdn Bhd</strong><br/>
            31st May 2018,11:04:33 AM
          </p>
        </div>
      </div>
  );
}

export default Header;
