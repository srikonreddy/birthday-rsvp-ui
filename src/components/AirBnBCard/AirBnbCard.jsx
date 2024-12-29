

import cardStyles from './cardStyles.module.css';

export const AirBnBCard = () => {
    return (
        <div className={cardStyles.card}>
        <img src="https://a0.muscache.com/im/pictures/hosting/Hosting-774679902908916423/original/06668386-8944-42a9-8507-4d9bbbe89f1f.jpeg?sw_cache=trips_images&im_w=960&im_format=avif" alt="Birthday Celebration" className={cardStyles.image} />
        <div className={cardStyles.body}>
          <p><strong>Address: </strong>45 St. John's Rd, Boscombe, Bournemouth, BH5 1AQ, UK</p>
        </div>
        <div onClick={() => window.open('https://air.tl/4VYiKAhz?s=67&unique_share_id=b8b1c3a9-fa27-4b50-90d6-780412cbeab2')} className={cardStyles.footer}>Click here to view the booking</div>
      </div>
    )
}