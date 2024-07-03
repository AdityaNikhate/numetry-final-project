import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import dbconnect from "./config/databaseConnection.js";
import userRoute from "./routes/userRoute.js"

dotenv.config({
  path:'.env'
})
const corsOption={
  origin:'http://localhost:5173',
  credentials:true
};

const PORT = process.env.PORT||8081;
const app = express();  
app.use(express.json());
app.use(cors(corsOption));

app.use('/api/v1/user', userRoute);

dbconnect()


app.listen(PORT, ()=>{
  console.log(`Server is running at ${PORT}`)
})