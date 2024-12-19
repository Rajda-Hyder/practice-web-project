import Link from "next/link"

export default function Links() {
    return (
        <div className="flex justify-center mb-4 mt-80">
        

            <Link href="https://www.linkedin.com/in/rajda-hyder-0086b02bb/" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
            </Link>
            <Link href="https://wa.me/+923333862809" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="whatsapp" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
            </Link>

            <Link href="https://web.facebook.com/rajda.hyder.5" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
            </Link>

              <Link href="https://github.com/Rajda-Hyder" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
            </Link>

            <Link href="mailto:rajdahyder@gmail.com" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Gmail" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
            </Link>

        </div>
    )
}