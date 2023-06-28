import './Date.css';

const ExDate = (props) => {
    const day = props.date.toLocaleString("en-US", {day: "2-digit"});
    const month = props.date.toLocaleString("en-US", {month: "long"});
    const year = props.date.getFullYear();

    return <div className="ex-date">
        <div className="ex-month">{month}</div>
        <div className="ex-year">{year}</div>
        <div className="ex-day">{day}</div>
    </div>
}

export default ExDate;
