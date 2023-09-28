import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGifts } from "react-icons/fa";
import img from './img/slider-img.png';
function Home(){
    return(
      <div className='container-fluid'>
      <Navbar expand="lg" className="bg-body-dark navbar">
        <Container>
          <Navbar.Brand href="#home" className='logo'>
             <h1><FaGifts/> GIFTOS </h1>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="custom-navbar-toggler" // Apply your custom toggle button class
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-item me-auto">
              <Nav.Link className="nav-menu" href="#home">Home</Nav.Link>
              <Nav.Link className="nav-menu" href="#shop">Shop</Nav.Link>
              <Nav.Link className="nav-menu" href="#why" >Why Us</Nav.Link>
              <Nav.Link className="nav-menu" href="#testimonial">Testimonial</Nav.Link>
              <Nav.Link className="nav-menu" href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* home page */}
      <div id="home">
      <div className="row">
        <div className="col col-lg-6 col-md-6 col-12">
          <h1>Welcome To Our Gift Shop</h1>
          <p>Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.</p>  
          <button className='btn'>Read More</button>
        </div>
        <div className="col col-lg-6 col-md-6 col-12">
          <img src={img} alt='girl'/>
        </div>
      </div>
    </div>
</div>
    )
}
export default Home;