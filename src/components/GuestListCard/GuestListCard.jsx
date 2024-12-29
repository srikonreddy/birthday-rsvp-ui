import React from 'react';
import './GuestListCard.css';

const GuestListCard = () => {
  const guests = [
    'Sri',
    'Ramnik',
    'Stacey',
    'Niha',
    'Yuktha',
    'Pauline',
    'Lexi',
    'Aonghus - Friday night only',
    'Isha - Saturday night only',
    'Molly - Friday night yet to confirm',
    'Charlotte - Saturday night yet to confirm'
  ];

  return (
    <div className="guestlist-card">
      <h2>Guest List</h2>
      <ol>
        {guests.map((guest, index) => (
          <li key={index}><strong>{guest}</strong></li>
        ))}
      </ol>
    </div>
  );
};

export default GuestListCard;