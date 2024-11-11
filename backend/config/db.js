import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mealhub:123@cluster0.fnm08.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}