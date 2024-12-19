"use client"
import { useEffect, useState } from "react"
export default function Effect() {
    const [count, setCount] = useState(0)
    const increment = ()=> setCount(count+1)
    useEffect(() => {
        const fetchdata = async ()=> {
            const url = "https://fakerapi.it/api/v1/persons?_locale=US&_quantity=1"
            const fetchDataFromApi = await fetch(url)
            const res = await fetchDataFromApi.json()
        }
    },[count])
    return(
        <div>
            <h1>useEffect hook</h1>
            <p onClick={increment}>{count}</p>

        </div>
    );
}//setshow 