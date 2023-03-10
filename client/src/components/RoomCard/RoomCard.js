import React from 'react'
import './RoomCard.css'

function RoomsCard({roomNo,roomId,roomType, description,available,imgUrl}) {
function openBookingPage(roomId){
  window.location.href=`/bookMyRoom?roomId=${roomId}`
}
  return (
    <div className='room-card-container'>
      <img className='room-card-header-img' src={imgUrl} />
      <div className='room-card-body'>
      <p>🏠 Room No: {roomNo}</p>
      <p>{description}</p>
      <p> 🛏️ Room Type: {roomType}</p>
      <p>{available?"✅  Available":"❌ Not Available"}</p>
      </div>
      <button className='booking-button' onClick={()=>{openBookingPage(roomId)}}>Book Now 🔐</button>
    </div>
  )
}

export default RoomsCard