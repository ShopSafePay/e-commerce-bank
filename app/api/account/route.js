import db from '@lib/db'
import User from '@models/User'
import { NextResponse } from 'next/server'

export const POST = async (req) => {

    try{

        await db()

        const { account, key, total } = await req.json()
        let user = await User.findOne({ account })
        

        if(!user) {
            return new NextResponse(JSON.stringify({data: "Invalid credentials"}), {status: 401})
        }

        if(user.key !== key) {
            return new NextResponse(JSON.stringify({data: "Wrong credentials"}), {status: 401})
        }
        
        if(user.balance < total) {
            return new NextResponse(JSON.stringify({data: "Insufficient funds"}), {status: 401})
        }

        user.balance = user.balance - total
        await user.save()

        return new NextResponse(JSON.stringify({data: "Success"}), {status: 201})



    } catch (err) {
        console.log(err)
        return new NextResponse(err, {status: 500})
    }

}