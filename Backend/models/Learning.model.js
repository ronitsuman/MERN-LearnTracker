import mongoose from 'mongoose';

const learningSchema = new mongoose.Schema({
    day:{
        type:Number,
        required:true,
    },
    code:{
        type:String,
        required:true

    },
    output:{
        type:String,
    },
    notes:{
        type:String,
    },
    keyPoints:{
        type:[String],
    }
},{timestamps:true});

module.exports = mongoose.model("Learning",learningSchema)
