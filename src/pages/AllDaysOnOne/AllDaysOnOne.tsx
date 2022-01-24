import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducer';

export const AllDaysOnOne = () => {
  const birthday = useSelector((state: RootState) => state.birthday);

  return (
    <div>
      <h1>{birthday}</h1>
    </div>);
};

