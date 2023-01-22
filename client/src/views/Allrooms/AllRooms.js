import React,{useState, useEffect} from 'react'
import axios from 'axios';
import RoomsCard from '../../components/RoomCard/RoomCard'
import './AllRooms.css'

function AllRooms() {
  const [allRoomsData, setallRoomsData] = useState([])

  useEffect(() =>{
    async function loadData() {
      const response  = await axios.get('/room')
      console.log(response.data);
      setallRoomsData(response.data.data)
    }
    loadData()
  },[])
  return (
    <div className='all-rooms-container'>{
      console.log(allRoomsData)
    }

     {
      allRoomsData.map((singleRoomData)=>{
        return(
          <RoomsCard  roomNo={singleRoomData.roomNo}  roomId={singleRoomData._id} roomType={singleRoomData.roomType} description={singleRoomData.description} available={singleRoomData.available} imgUrl={singleRoomData.imgUrl}/>
        )
      })
     }
    </div>
  )
}

export default AllRooms