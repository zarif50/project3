import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tanimtanzilislam9:16137025081203@cluster0.qr0qwa5.mongodb.net/FOOD-APP').then(()=>console.log("DB Connected"));
}