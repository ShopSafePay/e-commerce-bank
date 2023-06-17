import db from '@/lib/db'
import User from '@/models/User'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import { NextResponse } from 'next/server'

export async function POST(req) {

    try {

        await db()

        const { email, password } = await req.json()

        

        const user = await User.findOne({ email })

        console.log(user)

        if(!user) {
            return new NextResponse(json.stringify({data: "Invalid credentials"}), {status: 401})
        }
        
        const isValid = await bcrypt.compare(password, user.password)

        if (!isValid) {
            return new NextResponse(json.stringify({data: "Wrong credentials"}), {status: 401})
        }
        else {

            const data = {
                id: user._id,
                email: user.email,
                isLogged: true,
            }
            

            const token = jwt.sign(data, process.env.JWT_SECRET, {
                expiresIn: "1d",
            });
            console.log(token)

            return new NextResponse(JSON.stringify({data:token}), {status: 201})
        }

    } catch (err) {
        console.log(err)
        return new NextResponse(err, {status: 500})
    }
    
}