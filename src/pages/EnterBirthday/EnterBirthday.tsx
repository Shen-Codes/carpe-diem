import React from 'react';
import { NavLink } from 'react-router-dom';
import { DateSelector } from '../../components/DateSelector/DateSelector';
import './EnterBirthday.css';

export const EnterBirthday = () => {

  return (
    <div className="enter-birthday">
      <DateSelector />
      <NavLink to="/all_your_days_on_one_screen">
          See my life span on a screen
        </NavLink>
    </div>
  )
};


