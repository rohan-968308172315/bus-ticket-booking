import React from "react";

export default function Contact(){
    return(
        <>
         <div className="container-fluid  img">
            <div className="row">
              <div className="col-12">
                <h1 className="about-us">Contact</h1>
             </div>
            </div>
        </div> 

       <div className="container-fluid ">
            <div className="row">
                <div className="col-12">
                    <div className="hhh">LET'S GET IN TOUCH</div>
                    <div className="contactdescrition">Contact us by email, phone or through our web form below.</div>
                    <div className="col-4  card_hover_css contactcard1">
                  <div className="row">
                  <i class="fa-solid fa-location-dot"></i>
                <div className="ouraddress">our address</div>
                <div className="address">Ahmednagar</div>
                </div>
                 
                </div>
                <div className="col-4  card_hover_css contactcard1">
                  <div className="row">
                  <i class="fa-solid fa-phone"></i>
                  <div className="ouraddress">Call Us</div>
                <div className="address">+8446203849</div>
                
                </div>
                 
                </div>
                <div className="col-4  card_hover_css contactcard1">
                  <div className="row">
                  <i class="fa-solid fa-envelope"></i>
                  <div className="ouraddress">Email Us</div>
                  <div className="address">Info@gmail.com</div>
               
                </div>
                 
                </div>
                </div>
            </div>
        </div> 
       

        <div className="container-fluid ">
            <div className="row">
                <div className="col-12 col-lg-6 pt-5 pb-5">
                   
                <form className="form">
                    <div className="contact-us">Contact Us</div>
                <div class="mb-3">
                <label for="name" class="form-label">Name :</label>
                <input type="text" class="form-control" id="name" placeholder="Your Name"></input>
                </div>
                <div class="mb-3">
                <label for="email" class="form-label">Email address :</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                <label for="Number" class="form-label">Mobile No :</label>
                <input type="number" class="form-control" id="number" placeholder="mobile no"/>
                </div>
                <div class="mb-3">
                <label for="message" class="form-label">Message :</label>
                <textarea class="form-control" id="message" rows="2" placeholder="Your Message"></textarea>
                </div>
                <button className="btn">Send Us Message</button>
                </form>
                    
                </div>

                <div className="col-12 col-lg-6 map pt-5 pb-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.4875529407973!2d74.73330017394449!3d19.086255582120405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb14a01a85905%3A0x8dca7245a11f94cc!2sMaliwada%20Bus%20Stop!5e0!3m2!1sen!2sin!4v1719867782341!5m2!1sen!2sin" frameborder="0"></iframe>
                

                </div>
            </div>
        </div>
        </>
    )
}