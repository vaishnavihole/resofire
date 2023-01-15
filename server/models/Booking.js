import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema({
    roomId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Room"
    },
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    bookingStartDate:Date,
    bookingEndDate: Date
},{
    timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema)

export default Booking;