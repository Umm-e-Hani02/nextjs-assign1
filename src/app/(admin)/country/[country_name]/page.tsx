import CountryCard from "../../CountryCard/page";
import { CountryType } from "@/app/CountryType/type";


const countriesName = ({ params }: { params: { country_name: string } }) => {
  const contrydetails: CountryType[] = [
    {
      name: "Pakistan",
      capital: "Islamabad",
      population: 251269164,
    },
    {
      name: "Turkey",
      capital: "Ankara",
      population: 86172100,
    },
    {
      name: "Korea",
      capital: "Seoul",
      population: 51717590,
    },
    {
      name: "Japan",
      capital: "Tokyo",
      population: 123998000,
    },
    {
      name: "Switzerland",
      capital: "Bern",
      population:8938611,
    }
  ];

  const country = contrydetails.find(
    (c) => c.name.toLowerCase() === params.country_name.toLowerCase()
  );
  if (!country) {
    return <h1 className="p-6 text-xl text-center">Country not found!!</h1>;
  }

  return (
    <div>
<<<<<<< HEAD
      <CountryCard
        name={country.name}
        population={country.population}
        capital={country.capital}
      />
=======
      {country ? (
        <>
          <h1 className="text-3xl p-5">{capitalizeFirstLetter(country.name)}</h1>
          <p className="text-2xl p-5">Capital: {country.capital}</p>
          <p className="text-2xl p-5">Population: {country.population}</p>
        </>
      ) : (
        <h1 className="flex flex-col items-center p-5 text-xl">Country not found!</h1>
      )}
      <div className="flex justify-center items-center">

      <Link href="/country">
            <button className="bg-blue-950 text-white py-2 px-4 rounded mt-24 hover:text-gray-200 active:bg-slate-800 transition-all duration-300 ease-in-out">Back to Countries</button>
          </Link>
      </div>
>>>>>>> 3af0765d4599f9c6da31a040686b1e6a112d4d1e
    </div>
  );
};

export default countriesName;