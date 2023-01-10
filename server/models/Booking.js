import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema({
    bookingId: String,
    roomId: String,
    bookingStartDate:Date,
    bookingEndDate: Date
},{
    timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema)

export default Booking;