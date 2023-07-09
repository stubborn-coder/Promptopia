// we can set up our providers such aas google auth

import NextAuth from "next-auth/next";
import GoogleProvider from  'next-auth/providers/google';

import User from "@/models/user";

import { connectToDB } from "@/utils/database";
import { connect } from "mongoose";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({ session }) {

            const sessionUser = await User.findOne({
                email: session.user.email,
            })
    
            session.user.id = sessionUser._id.toString();

            return session;
    
        },
        async signIn({ profile }) {
            try {
                //serverless  route, opens when it gets called
                await connectToDB();
                //check if a user already exists 
                const userExists = await User.findOne({
                    email: profile.email,
                })
                
                // if not create new useer
                
                if(!userExists){
                    await User.create({
                        email:profile.email,
                        username:profile.name.replace(" ","").toLowerCase(),
                        image:profile.picture,
                    })
                }
                return true;
            }catch (error) {
    
                console.log(error);
                return false;
    
            }
        }
    }
    
}) 

export { handler as GET, handler as POST};