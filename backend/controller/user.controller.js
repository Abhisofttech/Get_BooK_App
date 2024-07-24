const User  = require('../models/user.model.js');
const bcrypt = require('bcryptjs');

const signUp =async  (req,res)=>{
    try{
   const {name , email , password} = req.body;
   const user = await User.findOne({email});
   if(user){
    return res.status(400).json({message:"User already exists"});
   }
   const hashpassword =await  bcrypt.hash(password,10)
   const createdUser = new User({
    name:name,
    email:email,
    password:hashpassword 
   })
    await createdUser.save();
    res.status(200).json({message:"User created successfully."
        ,user:{
        _id:createdUser._id,
        name:createdUser.name,
        email:createdUser.email
    }
})

    }catch(err){
        console.log(err);
        res.status(500).json({message:"Internal Server error"})
    }
}

const login = async (req,res)=>{
    try{
        const {email ,password} = req.body;
        // console.log(email , password)
        const user = await User.findOne({email});
        console.log(user)
        const isMatch= await bcrypt.compare(password , user.password);
        if(!user || !isMatch){
            return res.status(400).json({message:" Invalid Email or Password"})
        }else{
            res.status(200).json({message:"Login Successful",user:{
                _id:user._id,
                name:user.name,
                email:user.email
            }})
        }

    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"})
    }
}

// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });
//         console.log('User found:', user); // Add this log
//         if (!user) {
//             return res.status(400).json({ message: "Invalid Email or Password!!!" });
//         }
//         const isMatch = await bcrypt.compare(password, user.password);
//         console.log('Password match:', isMatch); // Add this log
//         if (!isMatch) {
//             return res.status(400).json({ message: "Invalid Email or Password!!!" });
//         }
//         res.status(200).json({
//             message: "Login Successful",
//             user: {
//                 _id: user._id,
//                 name: user.name,
//                 email: user.email
//             }
//         });

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// }


module.exports = { signUp , login };