import './App.css'
import { AirBnBCard } from './components/AirBnBCard/AirBnbCard'
import GuestListCard from './components/GuestListCard/GuestListCard'
import ScheduleCard from './components/ScheduleCard/ScheduleCard'

function App() {
  return (
    <>
      <header>
        <h1>Sri's 25th Birthday</h1>
      </header>
      <div>
        <h3>Hey y'all, welcome to my 25th birthday celebration website (time to finally put the skills I use at work to play)</h3>
        <h4>As you may know (maybe not if you're Isha), my birthday is coming up on the 11th of January. I've planned a weekend away, with my nearest and dearest, at an Airbnb in Bournemouth for the weekend of 10th - 12th January</h4>

        <div className='card-container'>
        <AirBnBCard />
          <ScheduleCard />
          <GuestListCard />
        </div>
      </div>
    </>
  )
}

export default App