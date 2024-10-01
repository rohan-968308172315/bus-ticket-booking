import React, { useState, useEffect } from "react";
import Hero from "./Header/Hero";
import Filter from "./Filter sidebar/Filter";
import TicketSearchBar from "./Ticket Search Bar/FromTo";
import TicketList from "./Ticket list/TicketList";
import { obj } from "../../Data";

export default function Booking() {
  const [apiData, setApi] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState({
    type: [],
    road: [],
    StartTime: [],
  });
  const [searchParams, setSearchParams] = useState({
    from: "",
    to: "",
    date: "",
  });

  useEffect(() => {
    setApi(obj);
    setFilteredData(obj);
  }, []);

  useEffect(() => {
    let filtered = apiData;

    if (selectedCategories.type.length > 0) {
      filtered = filtered.filter((item) =>
        selectedCategories.type.includes(item.type)
      );
    }

    if (selectedCategories.road.length > 0) {
      filtered = filtered.filter((item) =>
        selectedCategories.road.includes(item.road)
      );
    }

    if (selectedCategories.StartTime.length > 0) {
      filtered = filtered.filter((item) =>
        selectedCategories.StartTime.includes(item.StartTime)
      );
    }

    if (searchParams.from) {
      filtered = filtered.filter((item) => item.pickup === searchParams.from);
    }

    if (searchParams.to) {
      filtered = filtered.filter((item) => item.drop === searchParams.to);
    }

    if (searchParams.date) {
      filtered = filtered.filter((item) => {
        const itemDate = new Date(item.date);
        const searchDate = new Date(searchParams.date);
        return (
          itemDate.toDateString() === searchDate.toDateString() &&
          item.day ===
            searchDate.toLocaleDateString("en-US", { weekday: "long" })
        );
      });
    }

    setFilteredData(filtered);
  }, [selectedCategories, searchParams, apiData]);

  const handleCheckboxChange = (category, value) => {
    setSelectedCategories((prevState) => {
      const categoryValues = prevState[category];
      if (categoryValues.includes(value)) {
        return {
          ...prevState,
          [category]: categoryValues.filter((item) => item !== value),
        };
      } else {
        return {
          ...prevState,
          [category]: [...categoryValues, value],
        };
      }
    });
  };

  const resetFilters = () => {
    setSelectedCategories({
      type: [],
      road: [],
      StartTime: [],
    });
    setSearchParams({
      from: "",
      to: "",
      date: "",
    });
  };

  const handleSearchChange = (name, value) => {
    setSearchParams((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <section>
        <header>
          <Hero />
          <section>
            <TicketSearchBar
              handleSearchChange={handleSearchChange}
              searchParams={searchParams}
            />
          </section>
        </header>
        <section>
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 col-md-3">
                <Filter
                  handleCheckboxChange={handleCheckboxChange}
                  resetFilters={resetFilters}
                  selectedCategories={selectedCategories}
                />
              </div>
              <div className="col-12 col-md-9">
                <TicketList bookings={filteredData} />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
