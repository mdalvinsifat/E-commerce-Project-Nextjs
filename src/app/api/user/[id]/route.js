import { NextResponse } from "next/server";
import ECommrce from "../../model/model";

export const GET = async(requst ,{params}) =>{
    const {id} = params;
    const product = await ECommrce.findOne({_id :id})
    return NextResponse.json({product })
}

export const DELETE = async(requst ,{params}) =>{
    const {id} = params;
    const product = await ECommrce.findByIdAndDelete({_id :id})
    return NextResponse.json({product })
}



export const PUT = async(requst , {params})=>{
    const {id} = params 
    const {title , oldPrice,description, price ,category, quantity , rating , isNew, image }  = await requst.json()

    const product = await ECommrce.findByIdAndUpdate(id,
        {title , oldPrice,description, price ,category, quantity , rating , isNew, image } 
    )
    return NextResponse.json({product})
}