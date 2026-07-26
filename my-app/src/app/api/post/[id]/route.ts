import { NextRequest ,NextResponse,} from "next/server";
interface ParamsType{
    params:{
        id:string,


    }
}

export async function GET(request:NextRequest,{params}:ParamsType){
    const {id} = params;
    return  NextResponse.json({
        postId:id

    })

}