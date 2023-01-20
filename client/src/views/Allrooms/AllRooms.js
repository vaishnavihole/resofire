import React,{useState, useEffect} from 'react'
import RoomsCard from '../../components/RoomCard/RoomCard'
import './AllRooms.css'

function AllRooms() {
  const [allRoomsData, setallRoomsData] = useState([{ roomNo: 1,roomType: "single",description: "single rooms",available: true,imgUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&w=1000&q=80"},{roomNo: 1,roomType: "single",description: "single rooms",available: true,imgUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&w=1000&q=80"},{roomNo: 1,roomType: "single",description: "single rooms",available: true,imgUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&w=1000&q=80"},{roomNo: 1,roomType: "single",description: "single rooms",available: true,imgUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&w=1000&q=80"},{roomNo: 1,roomType: "single",description: "single rooms",available: true,imgUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&w=1000&q=80"},{roomNo: 1,roomType: "single",description: "single rooms",available: true,imgUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&w=1000&q=80"},{roomNo: 1,roomType: "single",description: "single rooms",available: true,imgUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&w=1000&q=80"},{roomNo: 1,roomType: "single",description: "single rooms",available: true,imgUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&w=1000&q=80"},{roomNo: 1,roomType: "single",description: "single rooms",available: true,imgUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&w=1000&q=80"},{roomNo: 1,roomType: "single",description: "single rooms",available: true,imgUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&w=1000&q=80"},{roomNo: 1,roomType: "single",description: "single rooms",available: true,imgUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&w=1000&q=80"},{roomNo: 1,roomType: "single",description: "single rooms",available: true,imgUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&w=1000&q=80"},{roomNo: 1,roomType: "single",description: "single rooms",available: true,imgUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&w=1000&q=80"}])

  return (
    <div className='all-rooms-container'>
     {
      allRoomsData.map((singleRoomData)=>{
        return(
          <RoomsCard  roomNo={singleRoomData.roomNo} roomType={singleRoomData.roomType} description={singleRoomData.description} available={singleRoomData.available} imgUrl={singleRoomData.imgUrl}/>
        )
      })
     }
    </div>
  )
}

export default AllRooms