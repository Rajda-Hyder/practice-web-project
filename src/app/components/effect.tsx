"use client"
import { useEffect, useState } from "react"
export default function Effect() {
    const [count, setCount] = useState(0)
    const increment = ()=> setCount(count+1)
    useEffect(() => {
           },[count])
    return(
        <div>
            <h1>useEffect hook</h1>
            <p onClick={increment}>{count}</p>

        </div>
    );
}//setshow 