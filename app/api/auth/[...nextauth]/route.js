import NextAuth from "next-auth/next"
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
                    label: "Email", type: "email", placeholder: ""
                },
                password: {
                    label: "Password", type: "password"
                }
            },
            async authorize(credentials, req) {
                const { email, password } = credentials;
                await db.connect();

                const user = await User.findOne({ email })
                if (!user) {
                    throw new Error("Invalid credentials");
                }
                const isValid = await bcrypt.compare(password, user.password);

                if (!isValid) {
                    throw new Error("Invalid Input");
                }
                else {
                    const { password, ...currentUser } = user._doc;
                    const accessToken = signJwtToken(currentUser, { expiresIn: '1d' });
                }
                return { ...currentUser, accessToken };
            }
        })
    ],
    pages: {
        signIn: '/pages/login',
    },
    callbacks: {
        async jwt(token, user) {
            if (user) {
                token.accessToken = user.accessToken;
                token._id = user._id;
            }
            return token;
        },
        async session(session, token) {
            if (token) {
                session.user._id = token._id;
                session.user.accessToken = token.accessToken;
            }
            return session;
        }
    }

        

})    

export { handler as GET , handler as POST}