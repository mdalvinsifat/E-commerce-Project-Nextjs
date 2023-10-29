
import mongoose,{Schema} from "mongoose"


const ProductSChema = new mongoose.Schema({
    title:{
        type:String
    },
    oldPrice:{
        type:Number
    },
    price:{
        type:Number
    },
    description:{
        type:String 
    },
    category:{
        type:String
    },
    image:{
        type:String
    },
    rating:{
        type:String
    },
    quantity:{
        type:String
    }
})


const ECommrce = mongoose.models.ecommerce || mongoose.model("ecommerce", ProductSChema)

export default ECommrce ; 