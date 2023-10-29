const { default: mongoose } = require("mongoose");



const Authschema = new mongoose.Schema({
    username :{
        type:String
    },
    password:{
        type:String
    }
})



const auth = mongoose.models.auth || mongoose.model("auth", Authschema)
export default auth ;