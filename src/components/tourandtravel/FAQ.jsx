

import React from "react";
import { NavLink } from "react-router-dom";
export default function FAQ() {
  return (
    <>

      <div className="container-fluid  img">
        <div className="row">
          <div className="col-12">
            <h1 className="about-us">FAQ</h1>
            <h4 className="text-white ms-5 ps-5"> <NavLink to={'/'} className={'text-danger'}>Home / </NavLink> FAQ's </h4>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="about-bus-getway">Frequently Asked Questions</div>
              <div className="aboutpageinfo">We are dedicated to providing the best travel experiences to our customers. <br></br>Our team of travel experts will ensure that your journey is unforgettable, safe and filled with amazing memories.</div>
            </div>

          </div>
        </div>
      </div>


      <div className="container-fluid faq ">
        <div classsName="row">

          <div className="col-6  colfirst">
            <details>
              <summary>Can we choose corporation buses from anywhere?</summary>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni necessitatibus rerum neque ut aliquam nesciunt id vero blanditiis voluptas!</p>

            </details>
          </div>

          <div className="col-6  colfirst">
            <details>
              <summary>Can we choose corporation buses from anywhere?</summary>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni necessitatibus rerum neque ut aliquam nesciunt id vero blanditiis voluptas!</p>

            </details>
          </div>

          <div className="col-6  colfirst">
            <details>
              <summary>Can we choose corporation buses from anywhere?</summary>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni necessitatibus rerum neque ut aliquam nesciunt id vero blanditiis voluptas!</p>

            </details>
          </div>

          <div className="col-6  colfirst">
            <details>
              <summary>Can we choose corporation buses from anywhere?</summary>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni necessitatibus rerum neque ut aliquam nesciunt id vero blanditiis voluptas!</p>

            </details>
          </div>

          <div className="col-6  colfirst">
            <details>
              <summary>Can we choose corporation buses from anywhere?</summary>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni necessitatibus rerum neque ut aliquam nesciunt id vero blanditiis voluptas!</p>

            </details>
          </div>

          <div className="col-6  colfirst">
            <details>
              <summary>Can we choose corporation buses from anywhere?</summary>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magni necessitatibus rerum neque ut aliquam nesciunt id vero blanditiis voluptas!</p>

            </details>
          </div>

        </div>
      </div>

      <div className="container-fluid blog">
        <div className="row">
          <div className="col-12">
            <div className="get-your-tickets">Recent Blog Post</div>
            <div className="have-a-look">Have a look at our popular reason. why you should choose you bus. Just a Bus and <br></br>get a ticket for your great journey. !</div>
          </div>
          <div className="col-md-4 blog1" data-aos="fade-up" data-aos-duration="2000">
              <div class="card card-body p-0">
               <div className="card_bus_an">
               <img
                  src="https://script.viserlab.com/viserbus/assets/images/frontend/blog/thumb_6210e4b6d132d1645274294.jpg"
                  alt="..."
                  
                />
               </div>
                  <h5 class="blog1-title">RED BUS</h5>
                  <p class="blog1-text">
                    redBus is India’s largest online bus ticketing platform that
                    has transformed bus travel in the country
                  </p>
              </div>
            </div>


            <div className="col-md-4 blog1" data-aos="fade-up" data-aos-duration="2000">
              <div class="card card-body p-0">
               <div className="card_bus_an">
               <img
                  src="https://script.viserlab.com/viserbus/assets/images/frontend/blog/thumb_6210e4b6d132d1645274294.jpg"
                  alt="..."
                  
                />
               </div>
                  <h5 class="blog1-title">RED BUS</h5>
                  <p class="blog1-text">
                    redBus is India’s largest online bus ticketing platform that
                    has transformed bus travel in the country
                  </p>
              </div>
            </div>

            <div className="col-md-4 blog1" data-aos="fade-up" data-aos-duration="2000">
              <div class="card card-body p-0">
               <div className="card_bus_an">
               <img
                  src="https://script.viserlab.com/viserbus/assets/images/frontend/blog/thumb_6210e4b6d132d1645274294.jpg"
                  alt="..."
                  
                />
               </div>
                  <h5 class="blog1-title">RED BUS</h5>
                  <p class="blog1-text">
                    redBus is India’s largest online bus ticketing platform that
                    has transformed bus travel in the country
                  </p>
              </div>
            </div>
        </div>
      </div>

    </>
  )
}