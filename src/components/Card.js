import React from 'react'
import paneertikka from '../pictures/paneer-tikka.jpg'
import "./Carousel.css";

function Card() {
     return (
          <div>
               <div className="card mt-3" style={{"width": "18rem", "maxHeight": "100px"}}>
                    <img src={paneertikka} className="card-img-top" alt="Paneer_Tikka"/>
                    <div className="card-body">
                         <h5 className="card-title">Card title</h5>
                         <p className="card-text">Some quick example text to build on the card title.</p>
                         <div className='container w-100'>
                              <select className='h-100 bg-success rounded'>
                                   {Array.from(Array(6), (e, i) => (                             
                                             <option key={i+1} value={i+1}> {i+1}</option>
                                   ))}
                              </select>

                              <select className='m-2 h-100 bg-success rounded'>
                                   <option value="half">Half</option>
                                   <option value="full">Full</option>
                              </select>

                              <div className='d-inline h-100 fs-6'>
                                   Total Price
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Card