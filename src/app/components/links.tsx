import Link from "next/link"
import Image from "next/image"

export default function Links() {
    return (
        <div className="flex justify-center mb-4 mt-80">
        

            <Link href="https://www.linkedin.com/in/rajda-hyder-0086b02bb/" target="_blank">
                <Image src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width={200} height={200} style={{ width: '24px', height: '24px', marginRight: '8px' }} />
            </Link>
            <Link href="https://wa.me/+923333862809" target="_blank">
                <Image src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="whatsapp" width={200} height={200} style={{ width: '24px', height: '24px', marginRight: '8px' }} />
            </Link>

            <Link href="https://web.facebook.com/rajda.hyder.5" target="_blank">
                <Image src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width={200} height={200} style={{ width: '24px', height: '24px', marginRight: '8px' }} />
            </Link>

              <Link href="https://github.com/Rajda-Hyder" target="_blank">
                <Image src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" width={200} height={200} style={{ width: '24px', height: '24px', marginRight: '8px' }} />
            </Link>

            <Link href="mailto:rajdahyder@gmail.com" target="_blank">
                <Image src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Gmail" width={200} height={200} style={{ width: '24px', height: '24px', marginRight: '8px' }} />
            </Link>

        </div>
    )
}