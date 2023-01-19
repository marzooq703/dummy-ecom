import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "./data";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Display = () => {
  const { productid } = useParams();
  const product = products.find((product) => product.id === productid);
  const { image, image2, name } = product;

  return (
    <section className="dis">
      <div className="display-pro">
        <Carousel className="cr">
          <Carousel.Item>
            <img
              className="d-block w-100 dis-img"
              src={image}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 dis-img"
              src={image2}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="dis-details">
          <h4>{name}</h4>
          <Link to="/products">back to products</Link>
        </div>
      </div>
    </section>
  );
};

export default Display;
