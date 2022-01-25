import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const AllDaysOnOne = () => {
  const birthday = useSelector((state: RootState) => state.bdayState.birthday);

  return (
    <div>
      <h1>{birthday}</h1>
    </div>
  );
};

