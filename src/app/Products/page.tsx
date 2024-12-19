import Link from "next/link";
import Image from "next/image";
import physics from "../../../image/physics_book_image.jpg"

 export default async function Products() {
  const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts")
  const res = await fetchData.json()
  console.log(res)
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
         res.map((item:any,i:number)=>{
            return(
              <li><Link href={`/Products/${item.id}`} className="text-blue-500 underline hover:text-red-700 ml-4">{item.title}</Link></li>
            )
          })}
      </ol>
    </div>
    </div>
  )
}
