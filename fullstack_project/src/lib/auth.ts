import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDb from "./db";
import User from "@/model/user.model"
import bycrypt from "bcryptjs"

const authOptions:NextAuthOptions = {
providers: [ 
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email", placeholder: "Enter your email" },
          password: { label: "Password", type: "password", placeholder: "Enter your password" }
        },
        async authorize(credentials,req){
            let email = credentials?.email;
            let password = credentials?.password;
            if(!email || !password){
                throw new Error ("Email and password are required ||  email or password not found");
            }
            await connectDb()
            let user = await User.findOne({email})
            if(!user){
                throw new Error ("User not found");
            }
            let isMatch = await bycrypt.compare(password, user.password)
            if(!isMatch){
                throw new Error ("Invalid password");
            }
           return {
            id: user._id,
            name: user.name,
            email: user.email,
            image: user.image,
           }
            
        },

     })
],
callbacks: {

},
session: {

},
pages:{

},
secret:"your-secret-key"
}
export default authOptions;