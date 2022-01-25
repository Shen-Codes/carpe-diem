import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { DateSelector } from '../../components/DateSelector/DateSelector';
import { RootState } from '../../redux/store';
import './EnterBirthday.css';

export const EnterBirthday = () => {
  const birthday = useSelector((state: RootState) => state.bdayState.birthday)
  
  return (
    <div className="enter-birthday">
      <DateSelector />
      <NavLink to="/all_your_days_on_one_screen">See my life span on a screen</NavLink>
    </div>
  )
};


