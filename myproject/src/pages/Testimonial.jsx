import React from 'react';
import gifts from './img/gifts.png';
function Testimonial(){
    return(
<div id='testimonial'>
    <div className="row">
      <div className="col col-lg-6 col-md-6 col-12">
        <img src={gifts} className='img-fluid' alt='girl'/> 
      </div>
      <div className="col col-lg-6 col-md-6 col-12">
        <h1>GIFTS FOR YOUR LOVED ONES</h1>
        <p>Omnis ex nam laudantium odit illum harum, excepturi accusamus at corrupti, velit blanditiis unde perspiciatis, vitae minus culpa? Beatae at aut consequuntur porro adipisci aliquam eaque iste ducimus expedita accusantium?</p>  
        <button className='btn '>Buy Now</button>
        <button className='btn '>See More</button>
      </div>
    </div>
</div>

    )
}
export default Testimonial;