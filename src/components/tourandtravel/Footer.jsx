import React from "react";
export default function Footer() {
  return (
    <>
    
      <footer  className="footer">
    <div  className="container">
      <div  className="row">
        <div  className="col-md-4">
          <img src="/img/navbarlogo.png"className="footerlogo"/>
       
          <p className="footerpag"> Have a look at our popular reason.<br></br> why you should
                choose you bus.a bus<br></br> and get a ticket for your
                great journey.</p>
          <div  className="social-icons">
            <a href="https://www.facebook.com/"><i  className="fab fa-facebook-f"></i></a>
            <a href="https://x.com/?lang=en"><i  className="fab fa-twitter"></i></a>
            <a href="https://vimeo.com/log_in"><i  className="fab fa-vimeo-v"></i></a>
            <a href="https://www.instagram.com/?hl=en"><i  className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div  className="col-md-2 Home">
          <h5 className="footerheader">Useful Links</h5>
          <ul style={{color:"black"}} className="list-unstyled">
            <li className="p"><a href="http://localhost:3001/" className="nav-link ">Home</a></li>
            <li><a href="http://localhost:3001/about" className="nav-link">About</a></li>
            <li><a href="http://localhost:3001/faqs" className="nav-link">FAQ'A</a></li>
            <li><a href="http://localhost:3001/contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
        <div  className="col-md-3 Home">
          <h5 className="footerheader">Policies</h5>
          <ul  className="list-unstyled">
            <li><a href="#" className="nav-link" style={{color:"black"}}>Privacy Policy</a></li>
            <li><a href="#" className="nav-link" style={{color:"black"}}>Terms and Conditions</a></li>
            <li><a href="#" className="nav-link" style={{color:"black"}}>Ticket Policies</a></li>
            <li><a href="#" className="nav-link" style={{color:"black"}}>Refund Policy</a></li>
          </ul>
        </div>
        <div  className="col-md-3 Home">
          <h5 className="footerheader">Contact Info</h5>
          <ul  className="list-unstyled "  style={{color:"black"}}>
            <li ><i className="fas fa-map-marker-alt " ></i> Bengla Road Suite Dhaka 1209</li>
           <li> <a href="tel:+8446203849" className="nav-link">  <i class="fa-solid fa-phone"></i>+44 45678908</a></li>
           <li> <a href="#" className="nav-link"><i class="fa-solid fa-envelope "></i> example@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </>
  );
}
