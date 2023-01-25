import React, { useState, useEffect } from 'react'
import axios from 'axios';
import RoomsCard from '../../components/RoomCard/RoomCard'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './AllRooms.css'

function AllRooms() {
  const [allRoomsData, setallRoomsData] = useState([])

  useEffect(() => {
    async function loadData() {
      const response = await axios.get('/room')
      console.log(response.data);
      setallRoomsData(response.data.data)
    }
    loadData()
  }, [])
  return (
    <div>
      <Navbar />
      <div className='all-rooms-container'>

        {
          allRoomsData.map((singleRoomData) => {
            return (
              <RoomsCard roomNo={singleRoomData.roomNo} roomId={singleRoomData._id} roomType={singleRoomData.roomType} description={singleRoomData.description} available={singleRoomData.available} imgUrl={singleRoomData.imgUrl} />
            )
          })
        }
      </div>
      <Footer />
    </div>
  )
}

export default AllRooms