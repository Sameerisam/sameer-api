import mongoose from "mongoose";
import { DB_Name } from "../constants.js";


const connectDB= async ()=>{
    try{
     const connnectionInstence=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
     console.log(`\n MongoDB connected!! DB host ${connnectionInstence.connection.host}`)
    //  console.log("connnectionInstence is ",connnectionInstence)

    } 
    catch(error){
        console.error("DB facing some error",error)
    }
}
export default connectDB;