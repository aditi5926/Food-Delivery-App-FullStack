import React from "react";
import burger from "../pictures/Burger.jpg";
import momos from "../pictures/Momos.jpg";
import frenchfries from "../pictures/French_Fries.jpg";
import "./Carousel.css";

function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{objectFit:"contain !important"}}
      >
        <div className="carousel-inner" id="carousel">
          <div class="carousel-caption" style={{zIndex:"10"}}>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success bg-success text-white" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img src={burger} alt="Burger" style={{filter: "brightness(30%)"}}/>
          </div>
          <div className="carousel-item">
            <img src={momos} alt="Momos" style={{filter: "brightness(30%)"}}/>
          </div>
          <div className="carousel-item">
            <img src={frenchfries} alt="French-Fries" style={{filter: "brightness(30%)"}}/>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFae"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
