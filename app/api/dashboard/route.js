import { NextResponse } from "next/server"
import db from '@/lib/db'
import User from '@/models/User'

export const GET = async (req) => {

    const url = new URL(req.url);

    const email = url.searchParams.get("email");
    console.log(email)

    try{
        await db()

        const user = await User.find(email && {email})
        console.log(user)

        return new NextResponse(JSON.stringify(user), {status: 201})
    } catch(err){
        return new NextResponse("Database Error", {status: 500})
    }


}
