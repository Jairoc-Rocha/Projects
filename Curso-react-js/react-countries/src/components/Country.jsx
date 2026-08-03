import Item from "./Item";

export default function Country({ children: country = null }) {
  if (!country) {
    return <div>Impossível renderizar o pais</div>;
  }

  const { flag, name, capital, region, population, area } = country;
  const demographicDensity = population / area;

  return (
    <div className="border p-2 m-2 flex items-center gap-2">
      <img className="w-48" src={flag} alt={name} />
      <ul>
        <li>
          <Item label="Nome:">{name}</Item>
        </li>
        <li>
          <Item label="Capital:">{capital}</Item>
        </li>
        <li>
          <Item label="Região:">{region}</Item>
        </li>
        <li>
          <Item label="População:">{population}</Item>
        </li>
        <li>
          <Item label="Área:">{area}</Item>
        </li>
        <li>
          <Item label="Densidade demográfica:">{demographicDensity}</Item>
        </li>
      </ul>
    </div>
  );
}
