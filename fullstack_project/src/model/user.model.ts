import mongoose from "mongoose"

interface Iuser {
    _id?: mongoose.Types.ObjectId,
  name?: string,
  image?:string,
  email: string,
  password: string,
  createdAt?: Date,
  updatedAt?: Date
}

const userShema = new mongoose.Schema<Iuser>({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }   


},{timestamps:true})

const User = mongoose.models.User ||  mongoose.model("User",userShema)

export default User
//mongoose.models ke andr phir se User ,any modle phir se create na ho jaye isliye check kar rhe hai ki User model already exist karta hai ya nahi, agar exist karta hai to usko use karenge otherwise new model create karenge.
//error se bachane ke liye ye check kar rhe hai ki User model already exist karta hai ya nahi, agar exist karta hai to usko use karenge otherwise new model create karenge.
