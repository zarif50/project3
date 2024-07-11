import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tanimtanzilislam9:16137025081203@cluster0.qr0qwa5.mongodb.net/FOOD-APPmon?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"));
}

  
  
  
  

//



//mongodb+srv://tanimtanzilislam9:16137025081203@cluster0.qr0qwa5.mongodb.net/FOOD-APP

//

//mongodb+srv://tanimtanzilislam9:<password>@cluster0.qr0qwa5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0





//mongodb+srv://vercel-admin-user:<password>@cluster0.qr0qwa5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0




