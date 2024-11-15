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
      <CountryCard
        name={country.name}
        population={country.population}
        capital={country.capital}
      />
    </div>
  );
};

export default countriesName;