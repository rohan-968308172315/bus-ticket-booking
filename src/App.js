import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Hourglass } from "react-loader-spinner";
import Navbar from "./components/tourandtravel/Navbar";
import Footer from "./components/tourandtravel/Footer";
import Home from "./components/tourandtravel/Home";
import About from "./components/tourandtravel/About";
import FAQ from "./components/tourandtravel/FAQ";
import Contact from "./components/tourandtravel/Contact";
import SelectSeat from "./components/Find and Booking/Select Seat/SelectSeat";
import Payment from "./components/Find and Booking/Payment/Payment";
import Booking from "./components/Find and Booking/Booking";
import Login from "./SL_form/Login/Login";
import Signin from "./SL_form/Signin/Signin";
import { ToastContainer } from 'react-toastify';
import Profile from "./components/User Dashboard/Profile";
import Dashboard from "./components/User Dashboard/Dashboard";
import BookingHistory from "./components/User Dashboard/BookingHistory";
import SupportTicket from "./components/User Dashboard/SupportTicket";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#306cce', '#72a1ed']}
          />
        </div>
      }>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#306cce', '#72a1ed']}
          />
        </div>
      ) : (
        <>
         <ToastContainer theme='colored' position='top-center'></ToastContainer>
          {location.pathname !== '/login' && location.pathname !== '/signin' && <Navbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/select_seat/:id" element={<SelectSeat />} />
            <Route path="/select_seat/payment/:id" element={<Payment />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/booking_history" element={<BookingHistory />} />
            <Route path="/support_ticket" element={<SupportTicket />} />
          </Routes>
          {location.pathname !== '/login' && location.pathname !== '/signin' && <Footer />}
        </>
      )}
    </Suspense>
  );
};

export default App;
