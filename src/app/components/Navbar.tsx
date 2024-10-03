import Link from "next/link"
export default function Navbar(){
    return(
        <nav className="bg-blue-950 p-6">
            <div className="flex justify-center items-center gap-9 text-nowrap" >
                <Link href="/">Home</Link>
                <Link href="/aboutus">About us</Link>
                <Link href="/contactus">Contact us</Link>
                <Link href="/country">Country</Link>
            </div>
        </nav>
    )
}
