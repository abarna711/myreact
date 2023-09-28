function Navbar(){
    return(
        <div className="container">
       <nav className="navbar navbar-expand-lg bg-body-drak" id="nav">
      
        <a className="navbar-brand" href="#">GIFTOS</a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button> 
       <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#Home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Shop">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Why Us">Why Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Testimonial">Testimonial</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">Contact Us</a>
            </li>
          </ul>
        </div>
    </nav> 
  </div>
    )
}
export default Navbar;