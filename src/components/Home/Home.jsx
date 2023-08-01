import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Make sure to import NavLink if you're using React Router
import Navbar from "../Navbar/Navbar";
import "./home.css";
import Footer from "../Footer/Footer";
import logo from "../../assets/light-bulb.png";

function Home() {
  return (
    <div className="main">
      <Navbar/>

      <h2 className="animated-text" style={{padding: '3%'}}>To-Do-App</h2>
      <div className="animation-container">
        <img src={logo} alt="Logo" className="logo" />
        <div className="animated-text">
          Welcome to our To-Do App, the perfect tool to help you stay organized and on top of your tasks! Our user-friendly and intuitive app allows you to create and manage your to-do lists with ease.
        </div>
       
      </div>

      <div className="Menu-button">
      <button class="button-50" role="button">Sign UP</button>
      <button class="button-50 btn-sign-in" role="button">Sign IN</button>
      <button class="button-50 btn-video" role="button">Embedded Video</button>
      </div>

      <Footer/>
    </div>
  );
}

export default Home;
