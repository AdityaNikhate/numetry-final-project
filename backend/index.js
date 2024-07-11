import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import dbconnect from "./config/databaseConnection.js";
import userRoute from "./routes/userRoute.js"
import itResumeRoute from "./routes/itResumeRoute.js"
import teacherRoute from "./routes/TeacherResumeRoute.js"
import doctorRoute from "./routes/doctorResumeRoute.js"

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
app.use('/api/v1/it', itResumeRoute);
app.use('/api/v1/teacher', teacherRoute)
app.use('/api/v1/doctor', doctorRoute)

dbconnect()


app.listen(PORT, ()=>{
  console.log(`Server is running at ${PORT}`)
})