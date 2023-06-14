import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import User from '@models/User'
import db from '@lib/db'
import { signJwtToken } from "@lib/jwt"
import bcrypt from 'bcrypt'


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                email: {
                    label: "Email", type: "email", placeholder: "mahin"
                },
                password: {
                    label: "Password", type: "password",placeholder: ""
                }
            },
            async authorize(credentials, req) {
                const { email, password } = credentials;
                await db();

                const user = await User.findOne({ email })

            

                if (!user) {
                    throw new Error("Invalid credentials");
                }
                const isValid = await bcrypt.compare(password, user.password);

               

                if (!isValid) {
                    throw new Error("Invalid Input");
                }
                else {
                    const {password, ...currentUser} = user
                    const accessToken = signJwtToken(currentUser, { expiresIn: '1d' });
                    return { ...currentUser, accessToken };
                }
                
                
            }
        })
    ],
    pages: {
        signIn: '/pages/login',
    },
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
      
          async session({ session, token }) {
            session.user = token 
            return session;
        },
    }

        

})    

export { handler as GET , handler as POST}