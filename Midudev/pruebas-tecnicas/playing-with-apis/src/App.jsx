import { useEffect, useState } from 'react'

const App = () => {
  
  const API_KEY = 'h5aiARpimUdF6xxiXZyEXveKSLmCI3Nsevqc6s9j'
  
  const [ fact, setCatFact ] = useState('');
  const [ img, setCatImg ] = useState('');
  
  const callApiCats = (string) => {
    fetch('https://api.thecatapi.com/v1/images/search?q=${string}&api_key=${API_KEY}')
    .then(response => response.json())
    .then(data => {
      // console.log(data[0]?.url);
      setCatImg(data[0].url);
      })
  }

  const callApiFact = () => {
    fetch('https://catfact.ninja/fact')
    .then((response) => response.json())
    // .then((data) => procesaDato(data.fact));
    .then((data) => {
      // console.log(data);
      setCatFact(data.fact || 'Hola soy R4mmst3in');
      const newFact = data?.fact?.split(' ', 3).join(' ');
      callApiCats(newFact);
    })
  }
  
  useEffect(callApiFact, [setCatFact]);
  
  return (
    <div className="card">
      <img className="imagen" src={img}></img>
      <h1 className="description">{fact}</h1>
    </div>
  )
}

export default App;