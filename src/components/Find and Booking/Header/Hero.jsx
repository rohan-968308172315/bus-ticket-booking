import React from "react";
import "./HeroStyle.css";
export default function Hero({ height, type, dash, road, tilte }) {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <div
                className="Hero-Background d-flex align-items-center justify-content-center"
                style={{ height }}>
                <h2 className="z-1 text-white">
                  <span className="text-warning">
                    {" "}
                    {type} {dash}{" "}
                  </span>
                  {tilte}
                  {road}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
