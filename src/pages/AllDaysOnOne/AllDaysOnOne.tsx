import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
// import { SingleDay } from '../../components/SingleDay';
import { RootState } from '../../redux/store';
import {useStyles} from './AllDaysOnOne.styles';

export type AllDaysOneOneProps = {
  column: number;
  row: number;
}

const SingleDay = React.lazy(() => import('../../components/SingleDay/SingleDay'));

export const AllDaysOnOne = () => {
  const allDays = useSelector((state: RootState) => state.bdayState.allDays);  
  const classes = useStyles();

  return (
    <div className={classes.daysContainer}>
      {allDays.map(date => {
        return (
          <Suspense fallback={<div>.</div>} key={date}>
            <SingleDay key={date} date={date} />
          </Suspense>
        )
      })}
    </div>
  );
};

