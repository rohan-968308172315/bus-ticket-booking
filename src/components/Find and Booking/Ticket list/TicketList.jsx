import React from "react";
import { FaBusAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import "./ticketlistStyle.css";
import { Link } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";
export default function TicketList({ bookings }) {
  const handleonclick = () => {};
  return (
    <>
      <section>
        <div className="container">
          <div className="">
            {bookings.length > 0 ? (
              bookings &&
              bookings.map((item) => (
                <div
                  className="row mt-2 mt-md-0 mb-4 shadow p-3 bg-gradient ticket-list"
                  key={item.id}>
                  <div className="col-12 col-md-4">
                    <h3 className="">{item.road}</h3>
                    <p>
                      <small>Seat Layout - {item.layout}</small>
                    </p>
                    <span className="text-color2 fs-6">
                      <i className="me-2">
                        <FaBusAlt />
                      </i>
                      {item.type}
                    </span>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="d-flex mt-5 bus-time justify-content-between ">
                      <p>{item.StartTime}</p>
                      <i className="fs-5 text-color2">
                        <FaArrowRightLong />
                      </i>
                      <p>{item.EndTime}</p>
                    </div>
                    <div className="d-flex text-secondary bus-time justify-content-between ">
                      <small className="">{item.pickup}</small>
                      <i className="">{item.distance}</i>
                      <small className="">{item.drop}</small>
                    </div>
                  </div>
                  <div className="col-12 ticket-price mb-4 d-flex justify-content-md-end pe-3 col-md-4">
                    <div>
                      <h4 className="text-color">₹{item.price}</h4>
                      <p>
                        off Days:
                        {item &&
                          item.offdays.map((offday) => (
                            <span className="badge ms-1" key={offday}>
                              {offday}
                            </span>
                          ))}
                      </p>

                      <Link to={`/select_seat/${item.id}`}>
                        <button
                          onClick={handleonclick}
                          className="btn bg-color text-white">
                          Select seat
                        </button>
                      </Link>
                    </div>
                  </div>
                  <hr />
                  <div className="col-12 ticket-footer">
                    <p className="text-secondary fw-bold">
                      Facilities :-
                      {item.Facilities.map((facility) => (
                        <span
                          className="badge ms-2 rounded-pill text-color"
                          key={facility}>
                          {facility}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-bus-container">
                <div className="no-bus-content">
                  <FaExclamationCircle className="no-bus-icon" />
                  <h3>No Buses Available</h3>
                  <p>
                    Unfortunately, there are no buses available for the selected
                    date.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
