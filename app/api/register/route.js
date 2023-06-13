import db from '@/lib/db'
import User from '@/models/User'
import bcrypt from 'bcrypt'

export async function POST(req) {

    try {
        await db()
        const { name, email, password: pass } = await req.json()
      
        const isExisting = await User.findOne({ email })
        if (isExisting) {
            throw new Error('User already exists')
        }

        const account = Math.floor(Math.pow(10,9)+Math.random() *( Math.pow(10,10)-Math.pow(10,9)-1))

        const hashedPassword = await bcrypt.hash(pass, 10)

        

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            account
        })

        console.log(name, email, pass)

        const { password, ...user } = newUser._doc
        
        return new Response(JSON.stringify(user), {status: 201})


       
    } catch (err) {
        return new Response(JSON.stringify(err.message), {status: 500})
    }

   

}