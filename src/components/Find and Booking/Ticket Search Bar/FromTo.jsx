import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import "./FromToStyle.css";

const TicketSearchBar = ({ handleSearchChange, searchParams }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleSearchChange(name, value);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="">
      <div className="container">
        <div className="bus-search-header shadow rounded-top-2 bg-gradient">
          <form className="ticket-form row g-3 justify-content-center">
            <div className="col-md-4 col-lg-3">
              <div className="form-group">
                <i className="fs-5 text-color2">
                  <FaLocationArrow />
                </i>
                <select
                  name="from"
                  className="form-control"
                  value={searchParams.from}
                  onChange={handleChange}>
                  <option value="">Pickup Point</option>
                  <option value="Pune">Pune</option>
                  <option value="Ahilyanagar">Ahilyanagar</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Nagpur">Nagpur</option>
                  <option value="Sambaji Nagar">Sambaji Nagar</option>
                </select>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="form-group">
                <i className="fs-5 text-color2">
                  <FaLocationDot />
                </i>
                <select
                  name="to"
                  className="form-control"
                  value={searchParams.to}
                  onChange={handleChange}>
                  <option value="">Dropping Point</option>
                  <option value="Pune">Pune</option>
                  <option value="Ahilyanagar">Ahilyanagar</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Nagpur">Nagpur</option>
                  <option value="Sambaji Nagar">Sambaji Nagar</option>
                </select>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="form-group">
                <i className="las la-calendar-check"></i>
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  placeholder="Date of Journey"
                  min={today}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="form-group">
                <button
                  type="button"
                  className="btn btn-primary bg-color border-0 w-100"
                  onClick={() => handleSearchChange("search", true)}>
                  Find Tickets
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TicketSearchBar;
