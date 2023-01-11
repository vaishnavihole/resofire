import mongoose from 'mongoose';

const billSchema = mongoose.Schema({
    roomId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Room"
    },
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    bookingid:String,
    billAmount: String,
    isPaid:String
},{
    timestamps: true
});

const Bill = mongoose.model('Bill', billSchema)

export default Bill;