import React from 'react'

function Card() {
     return (
          <div>
               <div className="card mt-3" style={{"width": "18rem", "maxHeight": "360px"}}>
                    <img src="..." className="card-img-top" alt="Img."/>
                    <div className="card-body">
                         <h5 className="card-title">Card title</h5>
                         <p className="card-text">Some quick example text to build on the card title.</p>
                         <div>
                              <select className='m-2 h-100 w-100 bg-success'>
                                   {Array.from(Array(6), (e, i) => (                             
                                             <option key={i+1} value={i+1}> {i+1}</option>
                                   ))}
                              </select>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Card