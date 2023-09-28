import React from "react";
function Contact(){
    return(
        <div id='contact'>
  <div className='row'>
    <div className='col col-lg-6 col-md-6 col-12'>
        <h1>Contact Us</h1>
        <form>
          <input type="text" className="form-control" id="username" placeholder="Enter Your Name" onkeyup="validationname()"/>
          <small id="err1"></small>
          <input type="email" className="form-control" id="mail" placeholder="Enter Your Email" onkeyup="validationmail()"/>
          <small id="err2"></small>
          <textarea className="form-control" id="add" placeholder="Address" onkeyup="validationadd()"></textarea>
          <small id="err"></small>
          <button  className='btn' onclick="return validationform()">submit</button>
           <small id="err5"></small>
        </form>
    </div> 
    <div className='col'>
      <h5>google map</h5>
    </div>    
  </div>
</div>

    )
}
export default Contact;