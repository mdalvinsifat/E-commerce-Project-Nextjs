import { NextResponse } from "next/server"
import ECommrce from "../model/model"
import Connection from "../ConnectionDB/Connection"



    export const GET = async(requst)=>{
        Connection()
        const product = await ECommrce.find()
        return NextResponse.json({product})
  }
    



export const POST = async(requst) =>{
    Connection()
    const {title , oldPrice,description, price ,category, quantity , rating , isNew, image } =await requst.json()
    const product = await ECommrce.create(
        {title , oldPrice,description, price ,category, quantity , rating , isNew, image}
    )
    return NextResponse.json({product} ,{status:400})
}