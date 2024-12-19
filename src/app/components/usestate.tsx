"use client"
import {useState} from "react"

export default function UseState (){
    const [count,setCount]= useState(0)
    const [Name,setName]= useState("Rajda")
    const increment = ()=>{
        setCount(count+1);setName("Hyder")
     }
    return(
        <div className="flex ml-10">
            <button onClick={increment} className="flex mr-10">{count}</button>
            <button>{Name}</button>
        </div>
    )
}//use any hook or      is always client side