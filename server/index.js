import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
import User from './models/User.js'
import Room from "./models/Room.js";

const app = express();
app.use(express.json())

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body
  const user = new User({
    fullName: fullName,
    mobile: mobile,
    email: email,
    password: password
  })
  const savedUser = await user.save()
  res.json({
    success: true,
    data: savedUser,
    message: 'signup successfully'
  })
})

app.post("/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  })

  if (user) {
    res.send({
      success: true,
      message: "User logged in successfully",
      user: user
    })
  }
  else {
    res.send({
      success: false,
      message: "user name or password is incorrect"
    })
  }
});

app.post('/room', async (req, res) => {
  const { roomNo, roomType, description, available, imgUrl } = req.body

  const errorMessage = []

  if (!roomNo) {
    errorMessage.push('roomNo')
  }

  if (!roomType) {
    errorMessage.push('roomType')
  }

  if (!description) {
    errorMessage.push('description')
  }

  if (!available) {
    errorMessage.push('availabel')
  }

  if (!imgUrl) {
    errorMessage.push('imgUrl')
  }

  if (errorMessage.length > 0) {
    return res.send({
      status: false,
      message: errorMessage + "cannot empty"
    })
  }
  const newRoom = new Room({
    roomNo: roomNo,
    roomType: roomType,
    description: description,
    available: available,
    imgUrl: imgUrl,
  })

  const savedRoom  = await newRoom.save()

  res.send({
     status: true,
     message: 'data saved successfully',
     data: savedRoom
  })
})



mongoose.connect(process.env.MONGO_DB_URL, () => {
  console.log("Connected to mongo DB📦")
})

app.listen(process.env.PORT || 5000, () => {
  console.log('Server started running on port 5000📦');
})