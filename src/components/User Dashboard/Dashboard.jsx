import React from "react";
import Hero from "../Find and Booking/Header/Hero";

export default function Dashboard() {
  return (
    <>
      <Hero tilte="Dashboard"></Hero>

      <section className="my-5 py-md-5 d-flex">
        <div className="container ">
          <div className="row">
            <div className="col-12 position-relative col-md-4">
              <div className="d-flex border-start border-5 border-success shadow-sm rounded-2 bg-whitesmoke mt-5 p-4 align-items-center justify-content-between">
                <div className="">
                  <span className="text-secondary">Total Booked Ticket</span>
                  <h3>0</h3>
                </div>
                <div>
                  <span className="p-3 text-center d-flex bg-success rounded ">
                    <i class="fa-solid fa-ticket text-white fs-3"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 position-relative col-md-4">
              <div className="d-flex border-start border-5 border-danger shadow-sm rounded-2 bg-whitesmoke mt-5 p-4 align-items-center justify-content-between">
                <div className="">
                  <span className="text-secondary">Total Rejected Ticket</span>
                  <h3>0</h3>
                </div>
                <div>
                  <span className="p-3 text-center d-flex bg-danger rounded ">
                    <i class="fa-solid fa-ticket text-white fs-3"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 position-relative col-md-4">
              <div className="d-flex border-start border-5 border-warning shadow-sm rounded-2 bg-whitesmoke mt-5 p-4 align-items-center justify-content-between">
                <div className="">
                  <span className="text-secondary">Total Pending Ticket</span>
                  <h3>0</h3>
                </div>
                <div>
                  <span className="p-3 text-center d-flex bg-warning rounded ">
                    <i class="fa-solid fa-ticket text-white fs-3"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
