import { NextResponse } from "next/server"
import auth from "./model/model"
import bcryptjs from 'bcryptjs'

export const POST = async(request)=>{
    try {
        const {username , password }  = await request.json()

       const user = await auth.findOne({username})
       
       if(user){
        return NextResponse.json({
            success:true
        })
       }

       const salt = await bcryptjs.genSalt(12)
       const hashpassword = await bcryptjs.hash(password ,salt)

       const newuser = auth({
        username ,
        password :hashpassword
       })

       const response = await newuser.save()
       return NextResponse.json({
        success:true,
        message:"User Reg Successfully ",
        response
       })

    } catch (error) {
        console.log(error)
    }
}