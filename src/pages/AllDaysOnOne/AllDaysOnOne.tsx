import React from 'react';
import { useSelector } from 'react-redux';
import { SingleDay } from '../../components/SingleDay';
import { RootState } from '../../redux/store';
import './AllDaysOnOne.css';

export const AllDaysOnOne = () => {
  const allDays = useSelector((state: RootState) => state.bdayState.allDays);

  return (
    <div id='all-days'>
      {allDays.map((date, index) => {
        return <SingleDay key={date} date={date} />
      })}
    </div>
  );
};

