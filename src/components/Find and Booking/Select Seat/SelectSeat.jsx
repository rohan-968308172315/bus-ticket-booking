import React, { useState, useEffect } from "react";
import { obj, SeatData } from "../../../Data.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./SelectSeatStyle.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaLocationArrow, FaTransgender } from "react-icons/fa";
import Swal from "sweetalert2";
import Hero from "../Header/Hero.jsx";
import { MdDateRange } from "react-icons/md";
import DateToDayFormatter from "../DateToDayFormatter.jsx";
function SelectSeat() {
  const usenavigate = useNavigate();
  const username = sessionStorage.getItem("username");
  useEffect(() => {
    if (username === "" || username === null) {
      usenavigate("/login");
    }
  }, []);

  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState({});

  const findObjectById = (ids) => {
    return obj.find((object) => object.id === ids);
  };

  const object = findObjectById(Number(id));

  const handleOnClick = (seatId) => {
    setSelectedSeats((prevState) => {
      const newSelection = { ...prevState };
      if (newSelection[seatId]) {
        delete newSelection[seatId];
      } else {
        newSelection[seatId] = true;
      }
      return newSelection;
    });
    setShowDetails(true);
  };
  const today = new Date().toISOString().split("T")[0];
  const totalSeats = Object.keys(selectedSeats).length;
  return (
    <>
      <section>
        <div className="container-fluid overflow-hidden pb-3 p-0">
          <div className="row">
            <div className="col-12">
              <Hero
                type={object?.type}
                road={object?.road}
                dash="-"
                height="40vh"></Hero>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <div className="py-5 w-50 text-center">
                <h3>Click on Seat to select or deselect</h3>
                <small className="text-secondary fs-6">Bus Off Days:</small>
                {object.offdays.map((item, val) => (
                  <span key={val} className="badge offdays ms-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row d-flex justify-content-md-end justify-content-center">
                <div className="col-12 d-flex justify-content-center col-md-6">
                  <div className="card p-4 w-100 mx-3 mx-md-0 seat-card gap-md-4 gap-4 float-md-end bg-whitesmoke shadow-sm">
                    <div className="form-group">
                      <label htmlFor="date" className="text-secondary mb-3">
                        <MdDateRange /> Select Journey Date
                      </label>
                      {/* <input
                        type="date"
                        name="date"
                        className="form-control p-1"
                        placeholder="Date of Journey"
                        min={today}
                        autoComplete="off"
                        required
                      /> */}
                      <DateToDayFormatter
                        object={object.offdays}
                        today={today}></DateToDayFormatter>
                    </div>
                    <div>
                      <small className="text-secondary mb-md-3 mb-2 ">
                        <FaLocationDot /> Pickup Point
                      </small>
                      <br />
                      <span className="badge mt-md-3 mt-2 w-100 p-2 bg-primary">
                        {object?.pickup}
                      </span>
                    </div>
                    <div>
                      <small className="text-secondary mb-3">
                        <FaLocationArrow /> Drop Point
                      </small>
                      <br />
                      <span className="badge mt-md-3 mt-2 w-100 p-2 bg-primary">
                        {object?.drop}
                      </span>
                    </div>
                    <div className="fw-bold">
                      <small className="text-secondary mb-3 fw-normal">
                        <FaTransgender /> Select Gender
                      </small>
                      <br />
                      <div className="d-flex mt-md-3 mt-2 justify-content-around">
                        <input type="radio" name="gender" value="male" /> Male
                        <input
                          type="radio"
                          className="mx-1"
                          name="gender"
                          value="female"
                        />
                        Female
                        <input
                          type="radio"
                          className="mx-1"
                          name="gender"
                          value="other"
                        />
                        Other
                      </div>
                    </div>
                    {showDetails && (
                      <div id="SeatDetail">
                        <small className="text-secondary mb-3 fs-6">
                          Selected Seats
                        </small>
                        <div className="border mt-3 rounded-2 overflow-hidden">
                          <table className="w-100">
                            <thead className="bg-color text-white">
                              <tr>
                                <th className="p-2 text-left">Seat No</th>
                                <th className="p-2 text-right">Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              {Object.keys(selectedSeats).map((seatId) => (
                                <tr key={seatId} className="border-bottom">
                                  <td className="p-2 border-t">{seatId}</td>
                                  <td className="p-2 border-t text-right">
                                    {object.price}
                                  </td>
                                </tr>
                              ))}
                              <tr>
                                <td className="p-2 border-t">
                                  Total Seat: {totalSeats}
                                </td>
                                <td className="p-2 fw-bold text-color border-t text-right">
                                  ₹
                                  {Object.keys(selectedSeats).length *
                                    object.price}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                    <div className="d-flex justify-content-center">
                      {Object.keys(selectedSeats).length > 0 ? (
                        <Link to={`/select_seat/payment/${id}`}>
                          <button
                            onClick={() => {
                              Swal.fire({
                                title: "Are you sure?",
                                text: "Book these seats?",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes",
                              }).then((result) => {
                                console.log(result);
                                if (result.isConfirmed) {
                                  Swal.fire({
                                    title: "Booking!➡️",
                                    text: "Select Seat Confirm.",
                                    icon: "success",
                                  });
                                } else {
                                  usenavigate("/booking");
                                }
                              });
                            }}
                            className="btn bg-color text-white">
                            Continue
                          </button>
                        </Link>
                      ) : (
                        <>
                          {" "}
                          <button className="btn bg-color text-white" disabled>
                            Continue
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-6 ">
                    <h4 className="text-center d-block d-md-none">
                      Select Seats below :
                    </h4>
                    <div className="h-100 shadow-sm mt-5 mt-md-0 pb-4 bg-whitesmoke rounded-1 border">
                      <div className="row m-0 pe-3">
                        <div className="col-6">
                          <span className="fw-bold">DOOR</span>
                        </div>
                        <div className="col-6">
                          <img
                            src="https://script.viserlab.com/viserbus/assets/templates/basic/images/icon/wheel.svg"
                            alt=""
                            className="m-auto p-3 ms-5"
                          />
                        </div>
                        {SeatData.map((item, index) => (
                          <>
                            <div className="col-1"></div>
                            <div
                              key={index}
                              className="col-2 p-0 mt-3 align-items-center d-flex seats">
                              <div
                                id={`${item.id}`}
                                onClick={() => handleOnClick(item.id)}
                                className="shadow-sm w-75 p-2 border align-items-center d-flex flex-column"
                                style={{
                                  background: selectedSeats[item.id]
                                    ? "rgb(0, 255, 128)"
                                    : "#fff",
                                  color: selectedSeats[item.id]
                                    ? "black"
                                    : "black",
                                }}>
                                <span>{item.seat}</span>
                                <span className="line"></span>
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SelectSeat;
