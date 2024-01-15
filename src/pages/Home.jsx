import React, { useEffect } from 'react'

export default function Home() {
const [img, setImg] = React.useState(
  "https://i.pinimg.com/originals/77/97/81/779781883952778b25974baa3cf7679c.gif"
);

const [carga, setCarga] = React.useState(true);



const cambiar = () => {
setCarga(true);


  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((json) => setImg(json[0].url))
    .finally (() => setCarga(false));

}
    console.log(img);
useEffect(() => {
  cambiar()
},[])






  return (
    <>
      <img
        src={carga ? "https://i.pinimg.com/originals/77/97/81/779781883952778b25974baa3cf7679c.gif" : img}
        alt=""
      />
      <h1>pronto</h1>
      <button onClick={cambiar}>cambiar</button>
    </>
  );
}
