"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./style.css"
const navbar=[
    {name:"Login" ,href:"/login"},
    {name:"ForgetPassword" ,href:"/forgotpassword"},
    {name:"Register" ,href:"/register"},
]

 export default function page({children}){
    const pathname=usePathname();
   
   return(
    <div>
        
    {
        

        navbar.map((val)=>{
            const isActive=pathname.startsWith(val.href)
            return <h3> <Link href={val.href} key={val.name} className={isActive ?"font-bold text-red-700":"text-blue-800"} >{val.name}  </Link></h3>
            
        })
    }
     {children}
    </div>
   
)
 }