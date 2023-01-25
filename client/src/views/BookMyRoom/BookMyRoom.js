import React, { useState, useEffect } from 'react'
import './BookMyRoom.css'
import axios from 'axios';
import swal from 'sweetalert'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { json, useSearchParams } from "react-router-dom";


function BookMyRoom() {
  let [searchParams, setSearchParams] = useSearchParams();
  const roomId = searchParams.get("roomId")
  const [roomDetails, setRoomDetails] = useState("")

  const [userId, setUserId] = useState("")
  const [bookingStartDate, setBookingStartDate] = useState("")
  const [bookingEndDate, setBookingEndDate] = useState("")

  async function bookRoom() {
    const response = await axios.post('/booking', {
      roomId: roomId,
      userId: JSON.parse(localStorage.getItem('user'))._id,
      bookingStartDate: bookingStartDate,
      bookingEndDate: bookingEndDate
    })

    
    if (response.data.status === true) {
      
      await swal({
        title: 'success!',
        text: response.data.message,
        icon: 'success'
      })
      window.location.href = "/dashboard"
    }
    else {
     await swal({
        title: 'error!',
        text: response.data.message,
        icon: 'error'
      })
    }

    console.log(response.data);
  }

  useEffect(() => {
    async function loadData() {
      const response = await axios.get(`/roomById?roomId=${roomId}`)
      setRoomDetails(response.data.data)
    }
    loadData()
  }, [])

  return (
    <div>
      <Navbar />
    <div className='book-my-room-container'>
      <div className='room-image-card'>
        <img className='feature-room-image' src={roomDetails?.imgUrl} />

      </div>

      <div className='booking-details-card'>
        {/* ? (safe nevigation operator ) */}
        <h4>Room No:{roomDetails?.roomNo}</h4>
        <h4>Room Type:{roomDetails?.roomType}</h4>
        <h6>{roomDetails?.description}</h6>
        <h4>{roomDetails?.available ? "✅  Available" : "❌ Not Available"}</h4>
        <div>
          <input className="form-control booking-dates" value={bookingStartDate} onChange={(e) => { setBookingStartDate(e.target.value) }} type="date" />
        </div>

        <div>
          <input className="form-control booking-dates" value={bookingEndDate} onChange={(e) => { setBookingEndDate(e.target.value) }} type="date" />
        </div>

        <div>
          <input className='book-button' type="button" value="Book Now" onClick={bookRoom} />
        </div>
      </div>
     
    </div>
    <Footer />
    </div>
  )
}

export default BookMyRoom