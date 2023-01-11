import mongoose from "mongoose";

const ratingSchema = mongoose.Schema({
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    roomId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Room"
    },
    stars: String,
    feedBack: String
},{
    timestamps: true
});

const Rating = mongoose.model('Rating', ratingSchema)

export default Rating;