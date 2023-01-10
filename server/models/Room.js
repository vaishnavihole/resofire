import mongoose from 'mongoose';

const roomSchema = mongoose.Schema({
    roomNo: Number,
    roomType: String,
    description:String,
    available: Boolean,
    imgUrl: String,
},{
    timestamp:  true
});

const Room = mongoose.model('Room', roomSchema)

export default Room;



