import {  isPast } from "././../../utils/Calendar";
import './SingleDay.css';
import { useStyles } from "./SingleDay.styles";
import ReactTooltip from "react-tooltip";

const SingleDay = ({ date } : {date: string}) => {
  const relationToNow = isPast(date);
  const classes = useStyles();

  return (
    <div className={`${classes.singleDay} ${relationToNow === 1 ? 'present' : relationToNow < 0 ? classes.past : ''}`} id={date} data-tip data-for={date}>
      <ReactTooltip id={date} >
        <span>{date}</span>
      </ReactTooltip>
    </div>
  )
}

export default SingleDay;