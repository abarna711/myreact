import React from 'react';
import p1 from './img/p1.png';
import p2 from './img/p2.png';
import p3 from './img/p3.png';
import p4 from './img/p4.png';
import p5 from './img/p5.png';
import p6 from './img/p6.png';
import p7 from './img/p7.png';
//import p8 from './image/p8.png';
import p8 from './img/p8.png';
//import './App.css';
function About (){
    return(
<div id='shop'> 
 
 <div className='row'>
    <h1 className='text-center'>LATEST PRODUCTS</h1>
</div>
<div className='row'>
  <div className='col col-lg-3 col-md-6 col-12'>  
     <div className="card" style={{width: '18rem'}}>
     <img src={p1} className="cardimg card-img-top" alt='ring'/>
     <div className="card-body">
     <h5 className="card-title text-center">Rings</h5>
     <p className="card-text">Price $300</p>
     <a href="#shop" className="btn">Shop Now</a>
     </div>
     </div>
  </div> 
  <div className='col col-lg-3 col-md-6 col-12'>  
     <div className="card" style={{width: '18rem'}}>
     <img src={p2} className="cardimg card-img-top" alt='watch'/>
     <div className="card-body">
     <h5 className="card-title text-center">Watch</h5>
     <p className="card-text">Price $800</p>
     <a href="#shop" className="btn">Shop Now</a>
     </div>
     </div>
  </div> 
  <div className='col col-lg-3 col-md-6 col-12'>  
     <div className="card" style={{width: '18rem'}}>
     <img src={p3} className="cardimg card-img-top" alt='watch'/>
     <div className="card-body">
     <h5 className="card-title text-center">Teddy Bear</h5>
     <p className="card-text">Price $500</p>
     <a href="#shop" className="btn">Shop Now</a>
     </div>
     </div>
  </div> 
  <div className='col col-lg-3 col-md-6 col-12'>  
     <div className="card" style={{width: '18rem'}}>
     <img src={p4} className="cardimg card-img-top" alt='flower'/>
     <div className="card-body">
     <h5 className="card-title text-center">Flower Bouquet</h5>
     <p className="card-text">Price $400</p>
     <a href="#shop" className="btn">Shop Now</a>
     </div>
     </div>
  </div> 
</div>
<div className='row'>
<div className='col col-lg-3 col-md-6 col-12'>  
     <div className="card" style={{width: '18rem'}}>
     <img src={p5} className="cardimg card-img-top" alt='teddy'/>
     <div className="card-body">
     <h5 className="card-title text-center">Teddy Bear</h5>
     <p className="card-text">Price $300</p>
     <a href="#shop" className="btn">Shop Now</a>
     </div>
     </div>
  </div> 
  <div className='col col-lg-3 col-md-6 col-12'>  
     <div className="card" style={{width: '18rem'}}>
     <img src={p6} className="cardimg card-img-top" alt='flower'/>
     <div className="card-body">
     <h5 className="card-title text-center">Flower Bouquet</h5>
     <p className="card-text">Price $800</p>
     <a href="#shop" className="btn">Shop Now</a>
     </div>
     </div>
  </div> 
  <div className='col col-lg-3 col-md-6 col-12'>  
     <div className="card" style={{width: '18rem'}}>
     <img src={p7} className="cardimg card-img-top" alt='watch'/>
     <div className="card-body">
     <h5 className="card-title text-center">Watch</h5>
     <p className="card-text">Price $500</p>
     <a href="#shop" className="btn">Shop Now</a>
     </div>
     </div>
  </div> 
  <div className='col col-lg-3 col-md-6 col-12'>  
     <div className="card" style={{width: '18rem'}}>
     <img src={p8} className="cardimg card-img-top " alt='ring'/>
     <div className="card-body">
     <h5 className="card-title text-center">Rings</h5>
     <p className="card-text">Price $400</p>
     <a href="#shop" className="btn">Shop Now</a>
     </div>
     </div>
  </div>
</div>
<div className='row'>
  <button className='btn'>View More</button>
</div> 
</div> 

)
}
export default About;