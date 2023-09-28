import React from 'react';
import Home from './pages/Home';
import About from './pages/About'
import Saving from './pages/Saving';
import Service from './pages/Service';
import Testimonial from './pages/Testimonial';
import Contact from './pages/Contact';
function Web() {
  return (
<>   
<Home/>    
<About/>
<Saving/>
<Service/>
<Testimonial/>
<Contact/>
</>

//     <div className='container-fluid'>
//     <Navbar expand="lg" className="bg-body-dark">
//       <Container>
//         <Navbar.Brand href="#home" className='logo'>
//            <h1><FaGifts/> GIFTOS </h1>
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="basic-navbar-nav"
//           className="custom-navbar-toggler" // Apply your custom toggle button class
//         />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="nav-item me-auto">
//             <Nav.Link className="nav-menu" href="#home">Home</Nav.Link>
//             <Nav.Link className="nav-menu" href="#shop">Shop</Nav.Link>
//             <Nav.Link className="nav-menu" href="#why" >Why Us</Nav.Link>
//             <Nav.Link className="nav-menu" href="#testimonial">Testimonial</Nav.Link>
//             <Nav.Link className="nav-menu" href="#contact">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     {/* home page */}
//     <div id="home">
//     <div className="row">
//       <div className="col col-lg-6 col-md-6 col-12">
//         <h1>Welcome To Our Gift Shop</h1>
//         <p>Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.</p>  
//         <button className='btn'>Read More</button>
//       </div>
//       <div className="col col-lg-6 col-md-6 col-12">
//         <img src={img} alt='girl'/>
//       </div>
//     </div>
//   </div>
   
//    {/* shop */}

// <div id='shop'> 
 
//      <div className='row'>
//         <h1 className='text-center'>LATEST PRODUCTS</h1>
//     </div>
//     <div className='row'>
//       <div className='col col-lg-3 col-md-6 col-12'>  
//          <div className="card" style={{width: '18rem'}}>
//          <img src={p1} className="cardimg card-img-top" alt='ring'/>
//          <div className="card-body">
//          <h5 className="card-title text-center">Rings</h5>
//          <p className="card-text">Price $300</p>
//          <a href="#shop" className="btn">Shop Now</a>
//          </div>
//          </div>
//       </div> 
//       <div className='col col-lg-3 col-md-6 col-12'>  
//          <div className="card" style={{width: '18rem'}}>
//          <img src={p2} className="cardimg card-img-top" alt='watch'/>
//          <div className="card-body">
//          <h5 className="card-title text-center">Watch</h5>
//          <p className="card-text">Price $800</p>
//          <a href="#shop" className="btn">Shop Now</a>
//          </div>
//          </div>
//       </div> 
//       <div className='col col-lg-3 col-md-6 col-12'>  
//          <div className="card" style={{width: '18rem'}}>
//          <img src={p3} className="cardimg card-img-top" alt='watch'/>
//          <div className="card-body">
//          <h5 className="card-title text-center">Teddy Bear</h5>
//          <p className="card-text">Price $500</p>
//          <a href="#shop" className="btn">Shop Now</a>
//          </div>
//          </div>
//       </div> 
//       <div className='col col-lg-3 col-md-6 col-12'>  
//          <div className="card" style={{width: '18rem'}}>
//          <img src={p4} className="cardimg card-img-top" alt='flower'/>
//          <div className="card-body">
//          <h5 className="card-title text-center">Flower Bouquet</h5>
//          <p className="card-text">Price $400</p>
//          <a href="#shop" className="btn">Shop Now</a>
//          </div>
//          </div>
//       </div> 
//     </div>
//   <div className='row'>
//   <div className='col col-lg-3 col-md-6 col-12'>  
//          <div className="card" style={{width: '18rem'}}>
//          <img src={p5} className="cardimg card-img-top" alt='teddy'/>
//          <div className="card-body">
//          <h5 className="card-title text-center">Teddy Bear</h5>
//          <p className="card-text">Price $300</p>
//          <a href="#shop" className="btn">Shop Now</a>
//          </div>
//          </div>
//       </div> 
//       <div className='col col-lg-3 col-md-6 col-12'>  
//          <div className="card" style={{width: '18rem'}}>
//          <img src={p6} className="cardimg card-img-top" alt='flower'/>
//          <div className="card-body">
//          <h5 className="card-title text-center">Flower Bouquet</h5>
//          <p className="card-text">Price $800</p>
//          <a href="#shop" className="btn">Shop Now</a>
//          </div>
//          </div>
//       </div> 
//       <div className='col col-lg-3 col-md-6 col-12'>  
//          <div className="card" style={{width: '18rem'}}>
//          <img src={p7} className="cardimg card-img-top" alt='watch'/>
//          <div className="card-body">
//          <h5 className="card-title text-center">Watch</h5>
//          <p className="card-text">Price $500</p>
//          <a href="#shop" className="btn">Shop Now</a>
//          </div>
//          </div>
//       </div> 
//       <div className='col col-lg-3 col-md-6 col-12'>  
//          <div className="card" style={{width: '18rem'}}>
//          <img src={p8} className="cardimg card-img-top " alt='ring'/>
//          <div className="card-body">
//          <h5 className="card-title text-center">Rings</h5>
//          <p className="card-text">Price $400</p>
//          <a href="#shop" className="btn">Shop Now</a>
//          </div>
//          </div>
//       </div>
//     </div>
//   <div className='row'>
//       <button className='btn'>View More</button>
//   </div> 
// </div> 

// {/* savings */}
// <div className='saving'>
//     <div className="row">
//       <div className="col col-lg-6 col-md-6 col-12">
//         <img src={saving} className='img-fluid' alt='girl'/> 
//       </div>
//       <div className="col col-lg-6 col-md-6 col-12">
//         <h1 className='text'>Best Savings on new arrivals</h1>
//         <p className='para'>Qui ex dolore at repellat, quia neque doloribus omnis adipisci, ipsum eos odio fugit ut eveniet blanditiis praesentium totam non nostrum dignissimos nihil eius facere et eaque. Qui, animi obcaecati</p>  
//         <button className='btn '>Read More</button>
//         <button className='btn '>See More</button>
//       </div>
//     </div>
// </div>

// {/* why us */}
// <div id='why'>
//   <div className='row'>
//     <h1>WHY SHOP WITH US</h1>
//   </div>
//   <div className='row'>
//     <div className='col col-lg-4 col-md-4 col-12'>
//       {/* <span><MdFireTruck/></span> */}
//       <img src={truck} alt='truck'/>
//       <h4>Fast Delivery</h4>
//       <p>variations of passages of Lorem Ipsum available</p>
//     </div>
//     <div className='col col-lg-4 col-md-4 col-12'>
//     {/* <span><RiRefreshFill/></span> */}
//       <img src={free} alt='free'/>
//       <h4>Free Shiping</h4>
//       <p>variations of passages of Lorem Ipsum available</p>
//     </div>
//     <div className='col col-lg-4 col-md-4 col-12'>
//       <img src={best} alt='free'/> 
//       <h4>Best Quality</h4>
//       <p>variations of passages of Lorem Ipsum available</p>
//     </div>
//   </div>
// </div>

// {/* Testimonial */}

// <div id='testimonial'>
//     <div className="row">
//       <div className="col col-lg-6 col-md-6 col-12">
//         <img src={gifts} className='img-fluid' alt='girl'/> 
//       </div>
//       <div className="col col-lg-6 col-md-6 col-12">
//         <h1>GIFTS FOR YOUR LOVED ONES</h1>
//         <p>Omnis ex nam laudantium odit illum harum, excepturi accusamus at corrupti, velit blanditiis unde perspiciatis, vitae minus culpa? Beatae at aut consequuntur porro adipisci aliquam eaque iste ducimus expedita accusantium?</p>  
//         <button className='btn '>Buy Now</button>
//         <button className='btn '>See More</button>
//       </div>
//     </div>
// </div>

// {/* contact */}

// <div id='contact'>
//   <div className='row'>
//     <div className='col col-lg-6 col-md-6 col-12'>
//         <h1>Contact Us</h1>
//         <form>
//           <input type="text" className="form-control" id="username" placeholder="Enter Your Name" onkeyup="validationname()"/>
//           <small id="err1"></small>
//           <input type="email" className="form-control" id="mail" placeholder="Enter Your Email" onkeyup="validationmail()"/>
//           <small id="err2"></small>
//           <textarea className="form-control" id="add" placeholder="Address" onkeyup="validationadd()"></textarea>
//           <small id="err"></small>
//           <button  className='btn' onclick="return validationform()">submit</button>
//            <small id="err5"></small>
//         </form>
//     </div> 
//     <div className='col'>
//       <h5>google map</h5>
//     </div>    
//   </div>
// </div>
// </div>
  );
}

export default Web;