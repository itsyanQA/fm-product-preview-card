import React from "react";
import "./Price.scss";

function Price() {
  return (
    <div className="price">
      <span className="price__discount">$149.99</span>
      <span className="price__original">$169.99</span>
    </div>
  );
}

export default Price;
