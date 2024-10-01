import React, { useEffect, useState } from "react";
import Hero from "../Find and Booking/Header/Hero";
import axios from "axios";

export default function BookingHistory() {
  const ticketData = [];
  const [getBooking, setBooking] = useState([]);
  useEffect(() => {
    axios.get();
  });
  return (
    <>
      <Hero tilte="Booking History"></Hero>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table">
                <thead className="table table-striped booking-history">
                  <tr className="">
                    <th>Sr.NO</th>
                    <th>PNR Number</th>
                    <th>Vehicle Type</th>
                    <th>Starting Point</th>
                    <th>Dropping Point</th>
                    <th>Journey Date</th>
                    <th>Pickup Time </th>
                    <th>Booked Seats </th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {ticketData.length > 0 ? (
                  <>
                    <tbody>
                      {ticketData.map((item, val) => (
                        <tr>
                          <td>{val + Number(1)}</td>
                          <td>{item.prn_no}</td>
                          <td>{item.Vehicle_t}</td>
                          <td>{item.Starting_Point}</td>
                          <td>{item.Dropping_Point}</td>
                          <td>{item.Journey_Date}</td>
                          <td>{item.Pickup_Time}</td>
                          <td>{item.Booked_Seats}</td>
                          <td>{item.Status}</td>
                          <td>{item.Action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </>
                ) : (
                  <>
                    <tbody>
                      <tr>
                        <td
                          colSpan="9"
                          className="text-center text-color fw-bold">
                          No ticket booking Data...
                        </td>
                      </tr>
                    </tbody>
                  </>
                )}
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
