import { isPast } from "./SingleDayUtils";
import './SingleDay.css';
import { useStyles } from "./SingleDay.styles";

export const SingleDay = ({ date } : {date: string}) => {
  const relationToNow = isPast(date);
  const classes = useStyles();

  return (
    <div className={`${classes.singleDay} ${relationToNow === 1 ? 'present' : relationToNow < 0 ? classes.past : ''}`} id={date}>
    </div>
  )
}