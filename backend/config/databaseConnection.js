import { connect } from "mongoose"
import dotenv from "dotenv"

dotenv.config({
  path:"../.env"
})

const dbconnect = async ()=>{
  try {
    const url = process.env.MONGO_URL;
    await connect(url);
    console.log("Database Connected")
  } catch (error) {
    console.error(`You have an error in dbconnection: ${error}`)
  }
}

export default dbconnect;