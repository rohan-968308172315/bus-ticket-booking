import React from "react";
import { FaBusAlt, FaRoad } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import "./filterStyle.css";

export default function Filter({ handleCheckboxChange, resetFilters }) {
  return (
    <>
      <div className="filter shadow">
        <div className="d-flex justify-content-between align-items-baseline">
          <h3 className="ms-3 p-2">Filter</h3>
          <span
            className="text-color2 badge reasetbtn me-2"
            onClick={resetFilters}>
            Reset all
          </span>
        </div>
        <hr />
        <div>
          <h4 className="ms-3">Vehicle Type</h4>
          <ul className="p-2">
            <li className="badge bg-white text-black px-3">
              <input
                type="checkbox"
                id="classic"
                onChange={(e) => handleCheckboxChange("type", e.target.value)}
                value="CLASSIC"
              />
              <label htmlFor="classic">
                <i>
                  <FaBusAlt />
                </i>
                CLASSIC
              </label>
            </li>
            <li className="badge bg-white text-black px-3">
              <input
                type="checkbox"
                id="no-ac"
                onChange={(e) => handleCheckboxChange("type", e.target.value)}
                value="NO-AC"
              />
              <label htmlFor="no-ac">
                <i>
                  <FaBusAlt />
                </i>
                NO-AC
              </label>
            </li>
            <li className="badge bg-white text-black px-3">
              <input
                type="checkbox"
                id="ac"
                onChange={(e) => handleCheckboxChange("type", e.target.value)}
                value="AC"
              />
              <label htmlFor="ac">
                <i>
                  <FaBusAlt />
                </i>
                AC
              </label>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h4 className="ms-3">Routes</h4>
          <ul className="p-2">
            <li className="badge bg-white text-black px-3">
              <input
                type="checkbox"
                id="ahilyanagar-pune"
                onChange={(e) => handleCheckboxChange("road", e.target.value)}
                value="Ahilyanagar to Pune"
              />
              <label htmlFor="ahilyanagar-pune">
                <i>
                  <FaRoad />
                </i>
                Ahilyanagar to Pune
              </label>
            </li>
            <li className="badge bg-white text-black px-3">
              <input
                type="checkbox"
                id="pune-mumbai"
                onChange={(e) => handleCheckboxChange("road", e.target.value)}
                value="Pune to Mumbai"
              />
              <label htmlFor="pune-mumbai">
                <i>
                  <FaRoad />
                </i>
                Pune to Mumbai
              </label>
            </li>
            <li className="badge bg-white text-black px-3">
              <input
                type="checkbox"
                id="pune-sambaji"
                onChange={(e) => handleCheckboxChange("road", e.target.value)}
                value="Pune to Sambaji Nagar"
              />
              <label htmlFor="pune-sambaji">
                <i>
                  <FaRoad />
                </i>
                Pune to Sambaji Nagar
              </label>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <h4 className="ms-3">Schedules</h4>
          <ul className="p-2">
            <li className="badge bg-white text-black px-3">
              <input
                type="checkbox"
                id="schedule1"
                onChange={(e) =>
                  handleCheckboxChange("StartTime", e.target.value)
                }
                value="06:00 AM"
              />
              <label htmlFor="schedule1">
                <i>
                  <MdOutlineWatchLater />
                </i>
                06:00 AM - 03:30 PM
              </label>
            </li>
            <li className="badge bg-white text-black px-3">
              <input
                type="checkbox"
                id="schedule2"
                onChange={(e) =>
                  handleCheckboxChange("StartTime", e.target.value)
                }
                value="08:00 AM"
              />
              <label htmlFor="schedule2">
                <i>
                  <MdOutlineWatchLater />
                </i>
                08:00 AM - 04:30 PM
              </label>
            </li>
            <li className="badge bg-white text-black px-3">
              <input
                type="checkbox"
                id="schedule3"
                onChange={(e) =>
                  handleCheckboxChange("StartTime", e.target.value)
                }
                value="07:00 AM"
              />
              <label htmlFor="schedule3">
                <i>
                  <MdOutlineWatchLater />
                </i>
                07:00 AM - 04:00 PM
              </label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
