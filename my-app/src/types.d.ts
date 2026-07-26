
declare global{
    type aman={
        name:string,
        age:number,
        isMarried:boolean
    }
    type mathfn = (x:number,y:number)=>number

    type user= number | string
}
export {}