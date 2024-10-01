import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";

export default function Profile() {
  const username = sessionStorage.getItem("username");
  const [userdata, setUserdata] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [getShow, setShow] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    gender: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get("http://localhost:3000/user");
        setUserdata(userResponse.data);
        console.log(userResponse.data);
      } catch (err) {
        alert(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const user = userdata.find((object) => object.username === username);
    if (user) {
      setFormData(user);
    }
  }, [userdata, username]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      await axios.put(`http://localhost:3000/user/${formData.id}`, formData);
      alert("Profile updated successfully!");
      setIsEditing(false);
    } catch (err) {
      alert("Error updating profile:", err);
    }
  };

  if (!formData) {
    return (
      <div className="container rounded bg-whitesmoke shadow-sm mt-5">
        User not found.
      </div>
    );
  }

  return (
    <div className="container rounded bg-whitesmoke shadow-sm mt-5">
      <div className="row">
        <div className="col-md-4 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              src="https://i.imgur.com/0eg0aG0.jpg"
              width="90"
              alt="Profile"
            />
            <span className="font-weight-bold bg-white badge text-black text-capitalize">
              {formData.name}
            </span>
            <span className="text-black-50">{formData.email}</span>
            <span className="fw-bold">India</span>
          </div>
        </div>
        <div className="col-md-8">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex flex-row align-items-center back">
                <i className="fa fa-long-arrow-left mr-1 mb-1"></i>
                <h6>Back to home</h6>
              </div>
              {!isEditing ? (
                <button onClick={handleEditClick} className="btn btn-primary">
                  Edit Profile
                </button>
              ) : (
                <button onClick={handleSaveClick} className="btn btn-primary">
                  Save Profile
                </button>
              )}
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone number"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">Gender</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Password</label>
                <i
                  onClick={() => {
                    setShow(!getShow);
                  }}
                  class="fa-solid fa-eye float-end"></i>
                <input
                  type={getShow ? "text" : "Password"}
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>
            </div>
            <div className="mt-5 text-right">
              {isEditing && (
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                  onClick={handleSaveClick}>
                  Save Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
