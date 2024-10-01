import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="about-us">About</div>
              <h4 className="text-white"> <NavLink to={'/'} className="text-danger ms-4 ps-5">Home / </NavLink>About </h4>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      {/*  */}
      <div className="section2">
        <div className="container-fluid">
          <div className="row" >
            <div className="col-12" >
              <div className="about-bus-getway">about bus getway</div>
              <div className="aboutpageinfo">
                We are dedicated to providing the best travel experiences to our
                customers. <br></br>Our team of travel experts will ensure that
                your journey is unforgettable, safe and filled with amazing
                memories.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid s3">
        <div className="row">
          <div className="col-lg-6 col-sm-12" data-aos="fade-up" data-aos-duration="1500" >
            <h3 className="ms-3">Awesome Tour Details</h3>
            <ul className="ul">
              <li>
                Research Bus Companies: Look for reputable bus companies that
                operate in your area or to your desired destination. Some
                well-known international and regional bus companies include
                Greyhound, Megabus, FlixBus, and National Express.
              </li>
              <li>
                Book Tickets: Tickets can often be booked online, at bus
                stations, or through third-party travel agencies. Booking online
                is usually more convenient and sometimes cheaper.
              </li>
              <li>
                Schedules and Routes: Check the schedules and routes in advance.
                Make sure you know the departure and arrival times, as well as
                any stops along the way.
              </li>
              <li>
                Local Transportation: Know your options for getting from the bus
                station to your final destination. This could include local
                buses, taxis, or ride-sharing services.
              </li>
              <li>
                Luggage: Collect your luggage and sure nothing is left behind on
                the bus.
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-sm-12 about_p" data-aos="fade-down" data-aos-duration="1500">
            <div className="card card-body">
            <img src="https://media.gettyimages.com/id/700126362/photo/a-mature-couple-sitting-on-a-bus-wave-goodbye-to-friends.jpg?s=612x612&w=0&k=20&c=6-e_5vH7Ars_iW5DHfyCk6NbVPg27AkVWNRgvElNguQ=" />
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="container-fluid s4">
        <div className="row">
          <div className="col-12">
            <div className="Why-Choose-Bus-Gateway">why choose bus gateway</div>
          </div>
        </div>
      </div>

      <div className="container-fluid aboutpage">
        <div className="row">
          <div className="col-12 col-lg-3  ">
            <div className="earth">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoyZ9dc4ZZNuFbdO-9LRgPtGFYinKdHdJFWg&s" ></img>
              <div className="earthtitle">Diverse Destinations</div>
              <div className="earthdescription">
                Richly varied landscapes,luxury accommodation Travel.
              </div>

              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1fouXX-JIpKv5QjFWsNtxNP24GSDXsYECQ&s"></img>
              <div className="earthtitle">Value for Money</div>
              <div className="earthdescription">
                Richly varied landscapes,luxury accommodation Travel.
              </div>

              <img src="https://st2.depositphotos.com/4242631/6430/v/450/depositphotos_64302369-stock-illustration-map-icon-with-pin-pointer.jpg"></img>
              <div className="earthtitle">Beautiful Places</div>
              <div className="earthdescription">
                Richly varied landscapes,luxury accommodation Travel.
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 single ">
            <img
              src="https://png.pngtree.com/background/20231101/original/pngtree-d-render-of-a-white-coach-tour-bus-driving-towards-pointer-picture-image_5833668.jpg"
              style={{ width: "90%" }}></img>
          </div>

          <div className="col-12 col-lg-3 ">
            <div className="earth">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqOvl442nBQae-auo4Ivncw6vNm8bIJ0fZ-nedOtrAlBxJCncfOOxim7-aQ1uJBoYzHUo&usqp=CAU"></img>
              <div className="earthtitle">Diverse Destinations</div>
              <div className="earthdescription">
                Richly varied landscapes,luxury accommodation Travel.
              </div>

              <img src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-team-icon-png-image_4231949.jpg"></img>
              <div className="earthtitle">Diverse Destinations</div>
              <div className="earthdescription">
                Richly varied landscapes,luxury accommodation Travel.
              </div>

              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcUkp2roGRQAcRINPPLFWgKcy8GaJ9aEWWSQ&s"></img>
              <div className="earthtitle">Diverse Destinations</div>
              <div className="earthdescription">
                Richly varied landscapes,luxury accommodation Travel.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
}
