import { NextResponse } from "next/server"
import auth from "../model/model"
import bcryptjs from 'bcryptjs'
import  JWT from "jsonwebtoken"
export const POST = async(request) =>{
    try {
        const {username, password} = await request.json()

        const user = await auth.findOne({username})
        if(!user){
            return NextResponse.json({
                success:false,
                message:"user not login successfuully"
            })
        }

        const vaildpassword = await bcryptjs.compare(password,user.password)
        if(!vaildpassword){
            return NextResponse.json({
                success:false,
                message:"user not exit"
            })
        }
        
        const token =await JWT.sign({
            usrname:user.username,
            id:user._id
        }, process.env.JWT_SECRENT_KEY)

        const respose = NextResponse.json({
            success:true,
            message:"user Login Successfully",  
            token
        })

        respose.cookies.set("token", token,{
            httpOnly:true,
            
        })
        
        return respose

    } catch (error) {
        console.log(error)
    }
}