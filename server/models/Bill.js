import mongoose from 'mongoose';

const billSchema = mongoose.Schema({
    roomId: String,
    userId: String,
    bookingid:String,
    billAmount: String,
    isPaid:String
},{
    timestamps: true
});

const Bill = mongoose.model('Bill', billSchema)

export default Bill;