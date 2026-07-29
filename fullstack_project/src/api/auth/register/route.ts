import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/model/user.model";
import connectDb from "@/lib/db";
export async function POST(request:NextRequest){
    try{
        const {name,email,password} =await request.json()
        await connectDb()

        let existUser = await User.findOne({email})
        if(existUser){
            return new NextResponse(JSON.stringify({message:"User already exist"}),{status:400})
        }
        if(password.length < 6){
            return new NextResponse(JSON.stringify({message:"Password must be at least 6 characters"}),{status:400})
        }

        const hashedPassword = await bcrypt.hash(password,10)
        const user = await User.create({name,email,password:hashedPassword})
        return new NextResponse(JSON.stringify({message:"User created successfully",user}),{status:201})

    }catch(error){
        console.error("Error creating user:", error)
        
        return new NextResponse(JSON.stringify({message:"Internal server error"}),{status:500})
    }

}
//sign up ke liye ye route hai, jab user sign up karega to ye route call hoga, aur ye request ke body me name,email,password lega, aur connectDb function ko call karega, jo ki database se connect karega.
// |
//check exist user ,,,phle se to nhi  n ,,, ydi phle se hai to error do

// password check for < 8 characters

//hash password usinf bcrypt js

//user create kr dengge
