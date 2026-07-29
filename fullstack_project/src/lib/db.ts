
import mongoose, {connect} from "mongoose"
let mongodbUrl = process.env.MONGODB_URL

if(!mongodbUrl){
    throw new Error("MONGODB_URL is not defined in the environment variables")  
}

let cached = global.mongoose
if(!cached){
   cached = global.mongoose = {conn:null,promise:null}  

}
const connectDb=async()=>{
    if(cached.conn){
        
        return cached.conn
    }
    if(!cached.promise){
        cached.promise = connect(mongodbUrl).then((c)=>c.connection)
    }
    try{
        cached.conn = await cached.promise
        
    }catch(error){
        console.error("Error connecting to database:", error)
        throw error 

    }
    return cached.conn
}

export default connectDb