import React from "react";
import "./Profile.css";
import Hero from "../Find and Booking/Header/Hero";
const SupportTicket = () => {
  return (
    <>
      <Hero tilte="Support Tickets"></Hero>
      <div className="container ">
        <div className="row">
          <div className="col-md-12 col-12 mx-auto">
            <div className="shadow-sm mt-5 bg-whitesmoke rounded-2 p-3 p-md-5">
              <form id="contact-form" role="form">
                <div className="controls">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="form_name">
                          First Name
                          <sup className="text-danger fs-6">*</sup>
                        </label>
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Please enter your firstname *"
                          required
                          data-error="Firstname is required."
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="form_lastname">
                          Last Name <sup className="text-danger fs-6">*</sup>
                        </label>
                        <input
                          id="form_lastname"
                          type="text"
                          name="surname"
                          className="form-control"
                          placeholder="Please enter your lastname *"
                          required
                          data-error="Lastname is required."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="form_email">
                          Email <sup className="text-danger fs-6">*</sup>
                        </label>
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Please enter your email *"
                          required
                          data-error="Valid email is required."
                        />
                      </div>
                    </div>
                    <div className="col-md-6 ">
                      <div className="form-group">
                        <label htmlFor="form_need">
                          Please specify your need{" "}
                          <sup className="text-danger fs-6">*</sup>
                        </label>
                        <select
                          id="form_need"
                          name="need"
                          className="form-control"
                          required
                          data-error="Please specify your need.">
                          <option value="" selected disabled>
                            --Select Your Issue--
                          </option>
                          <option>High</option>
                          <option>Medium</option>
                          <option>Low</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row gap-4">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="form_message">
                          Message <sup className="text-danger fs-6">*</sup>
                        </label>
                        <textarea
                          id="form_message"
                          name="message"
                          className="form-control"
                          placeholder="Write your message here."
                          rows="4"
                          required
                          data-error="Please, leave us a message."></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="form_email">
                          Attachments <sup className="text-danger fs-6">*</sup>
                        </label>
                        <input
                          id="form_email"
                          type="file"
                          name="file"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <input
                        type="submit"
                        className="btn btn-success btn-send pt-2 btn-block"
                        value="Send Message"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* /.8 */}
        </div>
        {/* /.row*/}
      </div>
    </>
  );
};

export default SupportTicket;
