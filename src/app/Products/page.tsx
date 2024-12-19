import Link from "next/link";
import Image from "next/image";
import physics from "../../../image/physics_book_image.jpg";

interface User{
  id:number,
  title:string,
}

 export default async function Products() {
  const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts")
  const res = await fetchData.json()

  return (
    <div>
      <h1 className="text-center underline text-purple-900">PRODUCTS PAGE</h1>
    <div className="flex ml-10">
          <Image src={physics} alt="physics Book"
        width={200}
        height={200}
        className="w-[400px] h-[400px] rounded-full ml-5"/>


      <ol> 
         { 
         res.map((item:User,i:number)=>{
            return(
              <div key={i}><Link href={`/Products/${item.id}`} className="text-blue-500 underline hover:text-red-700 ml-4">{item.title}</Link></div>
            )
          })}
      </ol>
    </div>
    </div>
  )
}
