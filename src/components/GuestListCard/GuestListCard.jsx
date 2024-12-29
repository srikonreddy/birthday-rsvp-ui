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
      <img src="https://hips.hearstapps.com/hmg-prod/images/heart-emoji-meanings-65c3b73691596.jpg?crop=0.105xw:0.385xh;0.777xw,0.466xh&resize=980:*" alt="Birthday Celebration" className='guestlist-image'/>

      <ol>
        {guests.map((guest, index) => (
          <li key={index}><strong>{guest}</strong></li>
        ))}
      </ol>
    </div>
  );
};

export default GuestListCard;