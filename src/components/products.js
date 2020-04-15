import React from "react";
import { Icon } from "react-materialize";
import { Link } from "react-router-dom";
import "../styles/products.css";
import { data } from "./data.js";

function ProductItems() {
  const productItems = data.map(product => 
    <div key={product.id} className="item">
      <Link to={`/products/${product.id}`}>
        <div className="product-img">
          <img alt={product.name} src={product.img} />
        </div>
        <div className="product-details">
          <h1 id="product-name">{product.name}</h1>
          <h4 id="product-description">{product.description}</h4>
        </div>
      </Link>
      <div className="price-add">
        <h5 id="product-price">${product.price}</h5>
        <Icon small id="add-icon">add_shopping_cart</Icon>
      </div>
    </div>
  );
  return <div className="items">{productItems}</div>;
}

export default function Products() {
  return (
    <div className="content">
      <div className="items-wrapper">
        <div className="items-title">
          <h3>All items</h3>
        </div>
      <ProductItems />
      </div>
    </div>
  );
}