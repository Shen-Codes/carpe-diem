import { isPast } from "./SingleDayUtils";
import './SingleDay.css';

export const SingleDay = ({ date } : {date: string}) => {
  const relationToNow = isPast(date);

  return (
    <div className={`single-day ${relationToNow === 1 ? 'present' : relationToNow < 0 ? 'past' : ''}`}>
    </div>
  )
}