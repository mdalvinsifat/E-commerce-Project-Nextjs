import mongoose, { mongo }  from "mongoose";



const Connection = async() =>{
    try {
        const res = await mongoose.connect('mongodb://127.0.0.1:27017/' )
        console.log("mongoose Connect")
    } catch (error) {
        console.log(error)
    }
}

export default Connection ;