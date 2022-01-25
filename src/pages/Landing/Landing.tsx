import React from 'react';
import { useSelector } from 'react-redux';
import {  NavLink } from 'react-router-dom';
import './Landing.css';

export const Landing = () => {

  return (
    <div className="container">
      <div className="navbar">
        <a href="remainingdays.html"><button className="landing-button">Go to Calendar</button></a>
      </div>
      <div className="header">
        <h1 className="landing-header">All Your Remaining Days on One Screen</h1>
      </div>
      <div className="main">
        <p>ipsum Lorem ipsum dolor sit amet consectetur</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eius distinctio reprehenderit.
          Dignissimos, pariatur?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aperiam repellendus quod!</p>
      </div>
      <NavLink to='enter_birthday'>Next</NavLink>
    </div>
  );
};
