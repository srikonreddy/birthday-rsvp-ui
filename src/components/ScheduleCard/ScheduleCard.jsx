import './ScheduleCard.css';

const ScheduleCard = () => {
  return (
    <div className="schedule-card">
      <h2>Schedule</h2>
      <div className="schedule-item">
        <h3>Friday Night (10th)</h3>
        <p>6:30 PM - Gather at the Airbnb</p>
        <p>9:30 PM - Drinks in the town centre</p>
      </div>
      <div className="schedule-item">
        <h3>Saturday Night (11th)</h3>
        <p>6:00 PM - My family arrives at the Airbnb</p>
        <p>7:00 PM - Birthday dinner</p>
        <p>9:00 PM - Games and celebration</p>
      </div>
    </div>
  );
};

export default ScheduleCard;