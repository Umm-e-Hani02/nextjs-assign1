import Link from "next/link"

export default function Home(){
    return(
        <div>
            <p className="text-xl flex justify-center items-center p-7">Explore Some Countries with their capital and population.</p>
            <div className="flex justify-center items-center">
            <Link href="/country">
<<<<<<< HEAD
            <button className="bg-rose-700 text-white py-2 px-4 rounded mt-60 hover:text-gray-200 active:bg-rose-500 transition-all duration-300 ease-in-out">Explore countries</button>
=======
            <button className="bg-blue-950 text-white py-2 px-4 rounded mt-60 hover:text-gray-200 active:bg-slate-800 transition-all duration-300 ease-in-out">Explore countries</button>
>>>>>>> 3af0765d4599f9c6da31a040686b1e6a112d4d1e
            </Link>   
            </div>
        </div>
    )
}
