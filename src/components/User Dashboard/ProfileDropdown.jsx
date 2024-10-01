import React from "react";
import "./Profile.css"; // Import your custom CSS
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function ProfileDropdown({ username }) {
  const usenavigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-5 mt-2 mt-md-1 ">
            <div className="dropdown custom-dropdown">
              <a
                href="#"
                className="d-flex justify-content-center dropdown-link"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <div className="profile-pic">
                  <img src="/img/person_2.jpg" className="" alt="Image" />
                </div>
                <div className="profile-info fs-6 badge text-black p-2 m-0 text-center">
                  <p>
                    {username}
                    <i className="fa-solid fa-caret-down ms-1 text-color2"></i>
                  </p>
                </div>
              </a>

              <div
                className="dropdown-menu shadow-lg"
                aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item border-bottom " to="/dashboard">
                  <i class="fa-solid fa-gauge pe-2 text-color  border-end border-1 "></i>{" "}
                  <span className="ps-1">User Dashboard</span>
                </Link>
                <Link
                  className="dropdown-item border-bottom "
                  to="/booking_history">
                  <i class="fa-solid fa-clock-rotate-left pe-2 text-color  border-end border-1 "></i>
                  <span className="ps-2">Booking History</span>
                </Link>
                <Link
                  className="dropdown-item border-bottom "
                  to="/support_ticket">
                  <i class="fa-solid fa-question pe-2 text-color  border-end border-1 "></i>
                  <span className="p-2">Support Ticket</span>
                </Link>
                <Link className="dropdown-item border-bottom " to="/profile">
                  <i class="fa-solid fa-user pe-2 text-color  border-end border-1 "></i>
                  <span className="p-2">Profile</span>
                </Link>
                <Link
                  className="dropdown-item border-bottom "
                  onClick={() => {
                    const swalWithBootstrapButtons = Swal.mixin({
                      customClass: {
                        confirmButton: "btn btn-success",
                        cancelButton: "btn btn-danger",
                      },
                      buttonsStyling: false,
                    });
                    swalWithBootstrapButtons
                      .fire({
                        title: "Are you sure?",
                        text: "You won't to log out Account!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonText: "Yes, Log Out!",
                        cancelButtonText: "No, Stay Login!",
                        reverseButtons: true,
                      })
                      .then((result) => {
                        if (result.isConfirmed) {
                          swalWithBootstrapButtons.fire({
                            title: "Log Out!",
                            text: "Your Account Log Out.",
                            icon: "success",
                          });
                          usenavigate("/login");
                        } else if (
                          /* Read more about handling dismissals below */
                          result.dismiss === Swal.DismissReason.cancel
                        ) {
                          swalWithBootstrapButtons.fire({
                            title: "Cancelled",
                            text: "You are Stay Log In:)",
                            icon: "error",
                          });
                          usenavigate("/");
                        }
                      });
                  }}>
                  <i class="fa-solid fa-right-from-bracket  pe-2 text-color  border-end border-1 "></i>
                  <span className="p-2">log Out</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
