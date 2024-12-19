import Link from "next/link"

export default function Navbar() {
    return (
        
            <ul className="flex ml-40">
                <li><Link href="/" className="text-blue-500 underline hover:text-red-700 ml-4 mr-10 text-3xl"><strong>Home</strong></Link></li>
                <li><Link href="/About" className="text-blue-500 underline hover:text-red-700 ml-4 mr-10 text-3xl"><strong>About</strong></Link></li>
                <li><Link href="/Products" className="text-blue-500 underline hover:text-red-700 ml-4 mr-10 text-3xl"><strong>Products</strong></Link></li>
                <li><Link href="/Account" className="text-blue-500 underline hover:text-red-700 ml-4 mr-10 text-3xl"><strong>Account</strong></Link></li>
                <li><Link href="/user" className="text-blue-500 underline hover:text-red-700 ml-4 mr-10 text-3xl"><strong>User</strong></Link></li>
            </ul>
            
    )}
