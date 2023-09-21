import React from "react";
import "./ProductCard.scss";
import Price from "../Price/Price";
import { ReactComponent as CartIcon } from "../../assets/icon-cart.svg";

function ProductCard() {
  return (
    <article className="product-card">
      <img className="product-card__image" alt="product" />
      <div className="product-card__details">
        <div className="product-card__titles">
          <span className="product-card__titles__category">PERFUME</span>
          <h1 className="product-card__titles__product">
            Gabrielle Essence Eau De Parfum
          </h1>
        </div>
        <p className="product-card__description">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <Price />
        <button className="product-card__button">
          <CartIcon />
          <span>Add To Cart</span>
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
