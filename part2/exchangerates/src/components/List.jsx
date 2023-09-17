import { useState } from "react";
import Item from "./Item"

const List = ({ list }) => {

  return (
    <>
      {list.map((item, i) => (
        <Item
          key={i}
          name={item.name.common}
          capital={item.capital}
          area={item.area}
          lang={item.languages}
          image={item.flags.svg}
        />
      ))}
    </>
  )
}

export default List