import React from 'react'
import Topbar from '../components/Topbar'
import Cards from '../components/Cards'
function Courselist() {
  const list = [
    {
      id: 1,
      img:"./courses images/sniper.jpg",
      title:"Sniper Masterclass",
      desc:"Learn Sniper shooting in 7hrs",
      price:"3000"
    },{
      id: 2,
      img:"./courses images/dagger.jpg",
      title:"Art of Dagger",
      desc:"Master The Art of Dagger",
      price:"₹500"
    },{
      id: 3,
      img:"./courses images/sword.jpg",
      title:"100 Days Of Sword",
      desc:"fighting With sword makes you a ninja",
      price:"1500"
    },{
      id: 4,
      img:"./courses images/punch.jpg",
      title:"Punch Mastery",
      desc:"Punch Your Enimes and Teach them a Lesson",
      price:"Free"
    },
    
  ]

  return (
    <div>
      <Topbar />
      <div className='courselist'>
        {list.map((item) => <Cards item={item} />)}
      </div>
    </div>
  )
}

export default Courselist
