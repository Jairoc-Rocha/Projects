import Country from "./Country";

export default function Countries({ children: countries = [] }) {
  return (
    <div className="border p-2">
      <h2 className="text-center font-semibold">{countries.length} pais(es)</h2>
      {countries.map((country) => (
        <Country key={country.id}>{country}</Country>
      ))}
    </div>
  );
}
