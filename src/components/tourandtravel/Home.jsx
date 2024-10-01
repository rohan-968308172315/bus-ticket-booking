import React, { useEffect } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import Aos from "aos";


export default function Home() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 banner ">
            <div className="title">GET YOUR TICKET </div>
            <div className="type"> EASY AND SAFELY</div>
            <div className="description">
              India's No. 1 Online Bus Ticket Booking Site
            </div>
            <button type="button" class="btn_b pb-2 pt-2 px-3 ">
              <NavLink to="/booking" className="nav-link">
                GET TICKET NOW
              </NavLink>
            </button>
          </div>
        </div>
      </div>





      <div className="box">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-12">
              <div className="get-your-tickets">
                Get Your Tickets With Just 3 Steps
              </div>
              <div className="have-a-look">
                Have a look at our popular reason. why you should choose you
                bus. Just a Bus and <br></br>get a ticket for your great
                journey. !
              </div>
            </div>
            <div class="container main_tickits">
              <div className="row">
                <div className="col-lg-4 col-sm-12 col-md-6 main_card_content mt-4" data-aos="fade-up" data-aos-duration="1500">
                  <div className="card card-body">
                    <img src="https://wallpaperaccess.com/full/1628619.jpg" alt="" className="p-0" />
                    <div className="thumb">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="titlee">Search Your Bus</div>
                    <p>
                      Choose your origin, destination,Just choose a Bus journey
                      dates and search for buses
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-12 col-md-6 main_card_content mt-4" data-aos="fade-up" data-aos-duration="2000">
                  <div className="card card-body">
                    <img src="https://wpcluster.dctdigital.com/thecourier/wp-content/uploads/sites/12/2020/01/KMil_Clippys-029_34635574-829x564.jpg" alt="" className="p-0" />
                    <div className="thumb">
                      <i class="fa-solid fa-ticket"></i>
                    </div>
                    <div className="titlee">Choose The Ticket</div>
                    <p>
                      Choose your origin, destination,Just a Bus for your great
                      journey dates and search for buses
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-12 col-md-6 main_card_content mt-4" data-aos="fade-up" data-aos-duration="1500">
                  <div className="card card-body">
                    <img src="https://www.manilatimes.net/manilatimes/uploads/images/2023/01/02/143060.jpg" alt="" className="p-0" />
                    <div className="thumb">
                      <i class="fa-solid fa-money-bill"></i>
                    </div>
                    <div className="titlee">Pay Bill</div>
                    <p>
                      Choose your origin, destination,choose a Bus for your
                      great journey dates and search for buses
                    </p>
                  </div>
                </div>


              </div>
            </div>

            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 ">
                      <div className="Our-Amenities">Our Amenities</div>
                      <div className="information">
                        Have a look at our popular reason. why you should choose
                        you bus.Just choose a Bus and<br></br> get a ticket for
                        your great journey!
                      </div>
                    </div>
                    <div className="container amenities">
                      <div className="row">
                        <div className="col-md-3 ">
                          <div className="amenities1" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                            <i class="fa-solid fa-wifi"></i>
                            <div className="amenities1_title">wifi</div>
                          </div>
                        </div>
                        <div className="col-md-3   ">
                          <div className="amenities2"  data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
                            <i class="fa-solid fa-mattress-pillow"></i>
                            <div className="amenities1_title">pillow</div>
                          </div>
                        </div>
                        <div className="col-md-3   ">
                          <div className="amenities1"  data-aos="fade-up" data-aos-duration="1500 " data-aos-delay="300">
                            <i class="fa-solid fa-bottle-water"></i>
                            <div className="amenities1_title">Water Bottle</div>
                          </div>
                        </div>
                        <div className=" col-md-3  ">
                          <div className="amenities2"  data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
                            <i class="fa-solid fa-wine-glass"></i>
                            <div className="amenities1_title">soft Drinkes</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="container-fluid sliderr">
        <div className="row">
          <div className="col-12">
            <div className="our-testimonials">Our Testimonials</div>
            <div className="des">
              Have a look at our popular reason. why you should choose you bus.
              Just choose a Bus and<br></br> get a ticket for your great
              journey!
            </div>
          </div>
        </div>

        <div
          id="carouselExampleControlsNoTouching"
          class="carousel slide"
          data-bs-touch="false">
          <div class="carousel-inner">
            <div className="container sliderbox ">
              <div className="row">
                <div className="col-12">
                  <div className="sliderinformation">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorem facilis velit earum ut?Exercitationem iure suscipit,
                    aperiam obcaecati cupiditate quam vero laborum incidunt
                    cumque odit provident similique voluptatem corrupti eius.
                  </div>

                  <img
                    src="/img/bus.jpg "
                    className="imgslider rounded-circle"
                  />
                  <div className="slidername">sarmin sultana</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 blog */}
      <div className="container blog">
        <div className="row p-3">
          <div className="col-md-12">
            <div className="get-your-tickets">Recent Blog Post</div>
            <div className="have-a-look">
              Have a look at our popular reason. why you should choose you bus.
              Just a Bus and <br></br>get a ticket for your great journey. !
            </div>
            </div>

            <div className="col-md-4 blog1">
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
           

            <div className="col-md-4 blog1">
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
           

            <div className="col-md-4 blog1">
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
  );
}
