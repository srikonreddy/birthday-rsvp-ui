import './ScheduleCard.css';

const ScheduleCard = () => {
  return (
    <div className="schedule-card">
      <h2>Schedule</h2>
      <div className="schedule-item">
        <h3>Friday Night (10th)</h3>
        <p><strong>6:30 PM</strong> - Gather at the Airbnb</p>
        <p><strong>9:30 PM</strong> - Drinks @ Aruba</p>
        <p className="schedule-address">
          <a href="https://maps.app.goo.gl/eSJm7TebDUWP74kn9" target="_blank" rel="noopener noreferrer">
            Pier Approach, Bournemouth BH2 5AA
          </a>
        </p>
        <p className="schedule-note">
          It's a 7 min cab or 17 min bus. Hopefully, cabs are easy to call; otherwise, we'll get the bus.
        </p>
        <img 
          src="https://www.visitbournemouth.com/media/zoo/images/aruba_23fb7921605331036cab5119fb99a16b.jpg" 
          alt="Drinks in the town centre" 
          className="schedule-image"
        />
      </div>
      <div className="schedule-item">
        <h3>Saturday (11th)</h3>
        <p><strong>12:00 PM</strong> - Brunch @ (ask Niha)</p>
        <p><strong>6:00 PM</strong> - My family arrives at the Airbnb</p>
        <p><strong>7:00 PM</strong> - Birthday dinner at the Airbnb</p>
      </div>
    </div>
  );
};

export default ScheduleCard;