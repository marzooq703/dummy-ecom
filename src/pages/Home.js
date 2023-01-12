import React from "react";
import { Link } from "react-router-dom";
import bgimg from "../Images/bgimg.svg";
const Home = () => {
  return (
    <>
      <section className="home">
        <div className="hero">
          <p className="hero-t1">Just Dropped</p>
          <p className="hero-t2">Feel Aunthentic Peace</p>
          <div className="bttn">
            <Link to="products" className="shop-bttn">
              Shop Now
            </Link>
          </div>
        </div>
        <img src={bgimg} id="bgimg" />
      </section>
    </>
  );
};

export default Home;
