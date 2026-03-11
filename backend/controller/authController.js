const User = require("../models/Auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")


// Register Controller
exports.register = async (req, res) => {
    const {name, email, password, role} = req.body;

    const userExist = await User.findOne({email});

    if(userExist){
        res.status(400).json({message: "User Already Exist"});
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name: name,
        email: email,
        password: hashpassword,
        role: role
    })

    res.status(201).json({message: "User Register Successfully"})
}

// Login Controller
exports.login = async(req, res) => {
    const {email, password} = req.body;

    const userExist = await User.findOne({email});
    if(!userExist){
        res.status(400).json({message: "Invalid Credential"});
    }

    const isMatch = await bcrypt.compare(password, userExist.password);

    if(!isMatch){
        res.status(404).json({message: "Invalid Creadential"});
    }

    const token = jwt.sign({id: userExist._id }, process.env.SECRET_JWT, {
        expiresIn: "1d"
    } )

    res.status(201).json({userExist, token})
}