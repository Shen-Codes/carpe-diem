import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { SaveBirthday } from '../../redux/actions';
import './DateSelector.css';


export const DateSelector = () => {
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    dispatch(SaveBirthday(e.target.value));
  }

  return (
    <div className="date-selector">
      <label htmlFor="name">Enter your birthday </label>
      <input type="date" className="date-selector--input" value="2000-01-01" onChange={handleChange}/>
    </div>
  )
};
