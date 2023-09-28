import React from "react";
import truck from './img/truck.svg';
import free from './img/free.svg';
import best from './img/high-quality.svg';
function Service(){
    return(
        <div id='why'>
  <div className='row'>
    <h1>WHY SHOP WITH US</h1>
  </div>
  <div className='row'>
    <div className='col col-lg-4 col-md-4 col-12'>
      {/* <span><MdFireTruck/></span> */}
      <img src={truck} alt='truck'/>
      <h4>Fast Delivery</h4>
      <p>variations of passages of Lorem Ipsum available</p>
    </div>
    <div className='col col-lg-4 col-md-4 col-12'>
    {/* <span><RiRefreshFill/></span> */}
      <img src={free} alt='free'/>
      <h4>Free Shiping</h4>
      <p>variations of passages of Lorem Ipsum available</p>
    </div>
    <div className='col col-lg-4 col-md-4 col-12'>
      <img src={best} alt='free'/> 
      <h4>Best Quality</h4>
      <p>variations of passages of Lorem Ipsum available</p>
    </div>
  </div>
</div>

    )
}
export default Service;