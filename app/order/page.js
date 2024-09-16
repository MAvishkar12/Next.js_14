"use client"
import { useRouter } from "next/navigation";
export default function order(){
    const router=useRouter()
    const handleOrder=()=>{
        console.log("Order Place");
        router.push("/")
        
    }
    return(
       
    <>

        <h1>Place order</h1>
        <button onClick={handleOrder}>Order</button>
        </>
    )
}