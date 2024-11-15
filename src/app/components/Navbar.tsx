import Link from "next/link"
export default function Navbar(){
    return(
<<<<<<< HEAD
        <nav className="bg-rose-700 p-7">
            <div className="flex items-center justify-center gap-7 text-nowrap">
                <Link className="hover:text-rose-200" href="/">Home </Link>
                <Link className="hover:text-rose-200" href="/aboutus">About us</Link>
                <Link className="hover:text-rose-200" href="/contactus">Contact us</Link>
                <Link className="hover:text-rose-200" href="/country">Country</Link>
=======
        <nav className="bg-blue-950 p-6">
            <div className="flex justify-center items-center gap-9 text-nowrap" >
                <Link href="/">Home</Link>
                <Link href="/aboutus">About us</Link>
                <Link href="/contactus">Contact us</Link>
                <Link href="/country">Country</Link>
>>>>>>> 3af0765d4599f9c6da31a040686b1e6a112d4d1e
            </div>
        </nav>
    )
}
