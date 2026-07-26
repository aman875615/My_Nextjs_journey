
import { NextRequest, NextResponse } from "next/server";
export async function GET(){
    return NextResponse.json({
        name:"AMan",
        age:20

    })

} 
export async function POST(request:NextRequest){
    const data = await request.json();
    console.log(data.name);
    return NextResponse.json({
        name:data.name,
        age:data.age
    })

   

}

export async function PUT(request:NextRequest){
    const data = await request.json();
    return NextResponse.json({
        name:data.name,
        age:data.age
    })

}
export async function DELETE(request:NextRequest){
    const data = await request.json();
    return NextResponse.json({
        name:data.name,
        age:data.age
    })

}



