const mongoose = require('mongoose');

const connectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully")
    } catch (error) {
        console.log("MongoDB Connection Error")
    }
}

module.exports = connectDB;