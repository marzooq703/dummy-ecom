import * as React from "react";
import { Link } from "react-router-dom";
import products from "../Components/data";

export default function Products() {
  return (
    <div className="pro">
      {/* <h1>Top Collections</h1> */}
      <div className="pro-grid">
        {products.map((product) => {
          return (
            <div>
              <article key={product.id} className="pro-container">
                <Link to={`/products/${product.id}`}>
                  <img src={product.image} className="pro-img" />
                </Link>
                <div className="pro-details">
                  <h4 className="pro-name">{product.name}</h4>
                  <h3 className="pro-price">&#x20b9;{product.price}</h3>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
}
