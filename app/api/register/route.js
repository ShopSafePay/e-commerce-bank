import db from '@/lib/db'
import bcrypt from 'bcrypt'
import User from '@/models/User'

export async function post(req) {

    try {
        await db.connect()
        const { email, name, password: pass } = await req.json()
        const isExisting = await User.findOne({email})
        if (isExisting) {
            throw new Error('User already exists')
        }
        const hashedPassword = await bcrypt.hash(pass, 10)
        const newUser = new User({
            email,
            name,
            password: hashedPassword
        })
        const { password, ...user} = newUser._doc
        return new Response(JSON.stringify(user), {status: 201})
    }catch (e) {
        return new Response(JSON.stringify({message: e.message}), {status: 500})
    }

}