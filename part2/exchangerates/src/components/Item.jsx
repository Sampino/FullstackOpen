
import Image from "./Image"

const Item = ({ name, capital, area, lang, image }) => {
  return (

    <>
      <h1>{name}</h1>
      <h3>Capital: {capital}</h3>
      <h3>Area: {area}</h3>
      <div>Languages:</div>
      <ul>
        {Object.entries(lang).map(([key, value]) => (
          <li key={key}>
            <span>{value}</span>
          </li>
        ))}
      </ul>
      <Image src={image} />
    </>
  )
}

export default Item