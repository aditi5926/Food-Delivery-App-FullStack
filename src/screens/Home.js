import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import burger from "../pictures/Burger.jpg";
import momos from "../pictures/Momos.jpg"; 
import frenchfries from "../pictures/French_Fries.jpg";
export default function Home() {
  const [search, setSearch] = useState("");
  const [FoodCat, setFoodCat] = useState([]);
  const [FoodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      response = await response.json();
      // console.log(response.food_items, response.food_category);
  
      setFoodItem(response.food_items);
      setFoodCat(response.food_category);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };  
  
  useEffect(() => {
    loadData();
  }, [])

  return (
    <div>
      <div>
        <Navbar />
      </div>

      
      <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{objectFit:"contain !important"}}
      >
        <div className="carousel-inner" id="carousel">
          <div class="carousel-caption" style={{zIndex:"10"}}>
            <div class="d-flex justify-content-center">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value = {search} onChange={(e) => setSearch(e.target.value)}
              />
              <button class="btn btn-outline-success bg-success text-white" type="submit">
                Search
              </button>
            </div>
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

      
      <div className="container">
      { 
        FoodCat.length > 0 ?
          FoodCat.map((data) => {
          return (<div className="row mb-3">
            <div key={data._id} className="fs-1 m-3 fw-bold"> {data.CategoryName} </div>
            <hr />
            {FoodItem.length > 0 
            ?FoodItem.filter((item)=> (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
            .map(filterItems => {
              return(
                <div key={filterItems._id} className="col-12 col-md-6 col-lg-4">
                  <Card  foodItem = {filterItems}
                  options = {filterItems.options[0]}
                  ></Card>
                </div>
              )
              })
            : <div>No Such Data found</div>}
          </div>
          )
        })
        : (<h1>Loading...</h1>)
      }
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
