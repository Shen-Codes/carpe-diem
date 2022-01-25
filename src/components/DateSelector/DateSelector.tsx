import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SaveBirthday } from '../../redux/actions';
import { RootState } from '../../redux/store/store';
import './DateSelector.css';


export const DateSelector = () => {
  const dispatch = useDispatch();
  const date = useSelector((state: RootState) => state.bdayState.birthday);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    dispatch(SaveBirthday(e.target.value));
  }

  return (
    <div className="date-selector">
      <label htmlFor="name">Enter your birthday </label>
      <input type="date" className="date-selector--input" value={date} onChange={handleChange}/>
    </div>
  )
};
