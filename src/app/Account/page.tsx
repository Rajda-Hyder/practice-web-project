import Link from "next/link"

interface User {
    id: number;
    name: string;
  }
  
export default async function Account() {
    const fetchdata = await fetch("https://jsonplaceholder.typicode.com/users")
    const User = await fetchdata.json()

 return (
        <div>
            <h2 className="text-center">ACCOUNT PAGE</h2>
            <h2><Link href="/Account/accountDetail">ACCOUNT DETAIL</Link></h2>
            <ol>
            { 
         User.map((item:User,i:number)=>{
            return(
                <div key={i}><Link href={`/Account/${item.id}`} >{item.name}</Link></div>
            )
         })}
        
            </ol>
        </div>
    )
}