import React from 'react';
import { useSelector } from 'react-redux';
import { SingleDay } from '../../components/SingleDay';
import { RootState } from '../../redux/store';
import {useStyles} from './AllDaysOnOne.styles';

export type AllDaysOneOneProps = {
  column: number;
  row: number;
}

export const AllDaysOnOne = () => {
  const allDays = useSelector((state: RootState) => state.bdayState.allDays);  
  const classes = useStyles();

  return (
    <div className={classes.daysContainer}>
      {allDays.map(date => {
        return <SingleDay key={date} date={date} />
      })}
    </div>
  );
};
