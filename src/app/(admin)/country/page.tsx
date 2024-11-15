import Link from "next/link";

const Countries = () => {
  return (
<<<<<<< HEAD
    <div>
      <div className="h-max w-full m-auto pb-6 mt-20 rounded-3xl font-semibold">
        <h1 className="text-4xl text-center text-white py-8 -mt-10">Country List</h1>
        <ul className="list-none flex justify-center flex-col items-center gap-4 text-white text-center">
          <li className="text-lg py-2 bg-rose-700 rounded-lg w-[330px] duration-100 hover:scale-110 flex justify-center items-center">
            <Link href={"/country/Pakistan"}>Pakistan</Link>
=======
    <div className="flex flex-col items-center">
      <h2 className="text-3xl p-8 ">List of Countries</h2>
      <ul className="space-y-4 ">
        {countries.map((country, index) => (
          <li key={index}>
            <Link href={`/country/${country.name.toLowerCase()}`}>
            <span className="text-xl w-48 h-10 bg-blue-950 rounded flex items-center justify-center hover:text-gray-200 active:bg-slate-800 transition-all duration-300 ease-in-out">{country.name}</span>
            </Link>
>>>>>>> 3af0765d4599f9c6da31a040686b1e6a112d4d1e
          </li>

          <li className="text-lg py-2 bg-rose-700 rounded-lg w-[330px] duration-100 hover:scale-110 flex justify-center items-center">
            <Link href={"/country/Turkey"}>Turkey</Link>
          </li>

          <li className="text-lg py-2 bg-rose-700 rounded-lg w-[330px] duration-100 hover:scale-110 flex justify-center items-center">
            <Link href={"/country/Korea"}>Korea</Link>
          </li>

          <li className="text-lg py-2 bg-rose-700 rounded-lg w-[330px] duration-100 hover:scale-110 flex justify-center items-center">
            <Link href={"/country/Japan"}>Japan</Link>
          </li>

          <li className="text-lg py-2 bg-rose-700 rounded-lg w-[330px] duration-100 hover:scale-110 flex justify-center items-center">
            <Link href={"/country/Switzerland"}>Switzerland</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Countries;
