import Link from "next/link";

const Countries = () => {
  return (
    <div>
      <div className="h-max w-full m-auto pb-6 mt-20 rounded-3xl font-semibold">
        <h1 className="text-4xl text-center text-white py-8 -mt-10">Country List</h1>
        <ul className="list-none flex justify-center flex-col items-center gap-4 text-white text-center">
          <li className="text-lg py-2 bg-rose-700 rounded-lg w-[330px] duration-100 hover:scale-110 flex justify-center items-center">
            <Link href={"/country/Pakistan"}>Pakistan</Link>
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
