import Link from "next/link"
export default async function Account() {
    const fetchdata = await fetch("https://jsonplaceholder.typicode.com/users")
    const res = await fetchdata.json()
    console.log(res)
 return (
        <div>
            <h2 className="text-center">ACCOUNT PAGE</h2>
            <h2><Link href="/Account/accountDetail">ACCOUNT DETAIL</Link></h2>
            <ol>
            { 
         res.map((item:any,i:number)=>{
            return(
                <li><Link href={`/Account/${item.id}`} >{item.name}</Link></li>
            )
         })}
        
            </ol>
        </div>
    )
}