import './ScheduleCard.css';

const ScheduleCard = () => {
  return (
    <div className="schedule-card">
      <h2>Schedule</h2>
      <div className="schedule-item">
        <h3>Friday Night (10th)</h3>
        <p>6:30 PM - Gather at the Airbnb</p>
        <p>9:30 PM - Drinks @ Aruba</p>
        <img 
          src="https://www.visitbournemouth.com/media/zoo/images/aruba_23fb7921605331036cab5119fb99a16b.jpg" 
          alt="Drinks in the town centre" 
          className="schedule-image"
        />
      </div>
      <div className="schedule-item">
        <h3>Saturday Night (11th)</h3>
        <p>6:00 PM - My family arrives at the Airbnb</p>
        <p>7:00 PM - Birthday dinner</p>
      </div>
    </div>
  );
};

export default ScheduleCard;