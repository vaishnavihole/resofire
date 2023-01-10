import mongoose from "mongoose";

const ratingSchema = mongoose.Schema({
    userId: String,
    roomId: String,
    stars: String,
    feedBack: String
},{
    timestamps: true
});

const Rating = mongoose.model('Rating', ratingSchema)

export default Rating;