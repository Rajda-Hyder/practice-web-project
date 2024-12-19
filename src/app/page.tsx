import Link from "next/link"
import Card from "./components/card"
import Image from "next/image"
import physics from "../../image/physics_book_image.jpg"
import chemistry from "../../image/chemistry.jpg"
import biology from "../../image/biology.jpg"
import UseState from "./components/usestate"
import Effect from "./components/effect"


export default function Home() {
  return (

    <div>
      <h2 className="text-center"><Link href="/Products" className="text-blue-800 underline hover:text-purple-400 hover:bg-pink-100 duration-1000 ">SELECT YOUR SUBJECT</Link> </h2>
      <Card name="Rajda" rollno={1234} />

      <div className="flex ml-20">
        <Image src={physics} alt="physics Book"
          width={160}
          height={160}
          className="w-[200px] h-[200px]  rounded-full ml-20" />

        <Image src={chemistry} alt="Chemistry Book"
          width={200}
          height={200}
          className="w-[200px] h-[200px] rounded-full ml-20" />

        <Image src={biology} alt="Biology Book"
          width={200}
          height={200}
          className="w-[200px] h-[200px] rounded-full ml-20" />
      </div>
      <div className="flex ml-40">
        <h1 className="text-green-700 underline hover:text-purple-400 mr-40 ">PHYSICS</h1>
        <h1 className="text-green-700 underline hover:text-purple-400 mr-20">CHEMISTRY</h1>
        <h1 className="text-green-700 underline hover:text-purple-400 mr-20">BIOLOGY</h1>
      </div>
      <UseState />

      <Effect />

    </div>

  )
}
