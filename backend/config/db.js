import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:02013003@cluster0.taqdu.mongodb.net/food-del').then(()=>console.log("DB connected"));

}