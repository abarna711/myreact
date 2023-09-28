import React from "react";
import saving from './img/saving-img.png';
function Saving(){
    return(
        <div className='saving'>
    <div className="row">
      <div className="col col-lg-6 col-md-6 col-12">
        <img src={saving} className='img-fluid' alt='girl'/> 
      </div>
      <div className="col col-lg-6 col-md-6 col-12">
        <h1 className='text'>Best Savings on new arrivals</h1>
        <p className='para'>Qui ex dolore at repellat, quia neque doloribus omnis adipisci, ipsum eos odio fugit ut eveniet blanditiis praesentium totam non nostrum dignissimos nihil eius facere et eaque. Qui, animi obcaecati</p>  
        <button className='btn '>Read More</button>
        <button className='btn '>See More</button>
      </div>
    </div>
</div>

    )
}
export default Saving;