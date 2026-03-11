const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db")
const authRoute = require("./routes/authRoute")

// Middlware 
app.use(express.json());
app.use(cors());
dotenv.config();


// Database Connection
connectDB();


// API TEST
app.get("/", (req, res) => {
    res.send("Application is Working")
})

app.use("/api/auth", authRoute)


const PORT = process.env.PORT

const server = http.createServer(app);

app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${process.env.PORT}`)
})