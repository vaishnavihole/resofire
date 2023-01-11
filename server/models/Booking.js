import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema({
    bookingId: String,
    roomId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Room"
    },
    bookingStartDate:Date,
    bookingEndDate: Date
},{
    timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema)

export default Booking;