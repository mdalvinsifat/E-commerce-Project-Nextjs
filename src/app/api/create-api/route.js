import { NextResponse } from 'next/server'
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


export async function POST (requst) {
    const data = await requst.json()
    const amount = data.amount
    try {
        const payment = await stripe.paymentIntents.create({
            amount:Number(amount) + 100,
            currency:"USD"

        })

        return NextResponse.json(payment.client_secret,{status:200})
    } catch (error) {
        return NextResponse.json({success:false})
    }
}