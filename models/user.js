const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    pic:{type:String, default:"https://res.cloudinary.com/djtymktnb/image/upload/v1598472438/instagram-default-profile-picture-11562973083brycehrmyv_r6i7kc.png"},
    followers:[{type:ObjectId, ref:"User"}],
    following:[{type:ObjectId, ref:"User"}]
});

mongoose.model("User", userSchema);