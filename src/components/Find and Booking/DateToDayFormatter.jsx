import React, { useState } from "react";
import Swal from "sweetalert2";
const DateToDayFormatter = ({ object, today }) => {
  console.log(object);
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [error, setError] = useState("");
  const [getDay, setvalue] = useState();
  const handleDateChange = (event) => {
    const date = new Date(event.target.value);
    const options = { weekday: "long" };
    const day = date.toLocaleDateString("en-US", options);
    setvalue();
    // Validation for Monday and Friday
    if (day === object[0] || day === object[1]) {
      setError(
        Swal.fire({
          icon: "error",
          title: `Oops This Bus is No Available on ${object[0]} ${object[1]}`,
          text: "Something went wrong!",
        }).then((result) => {
          if (result.isConfirmed) {
            setvalue("");
          }
        })
      );
      setDayOfWeek("");
    } else {
      setError("");
      setDayOfWeek(day);
    }
  };

  return (
    <div>
      <label htmlFor="dateInput"></label>
      <input
        type="date"
        name="date"
        value={getDay}
        className="form-control p-1"
        placeholder="Date of Journey"
        min={today}
        autoComplete="off"
        required
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DateToDayFormatter;
