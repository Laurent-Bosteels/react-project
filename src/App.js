import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  // creating the state
  // setCocktails is going update it
  
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    axios
    .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => {
      setCocktails(res.data);
      console.log(res.data);
    })
    .catch(error => console.log(error))
  }, []);

  return (
    <div className="App">
      <h1>API</h1>
    </div>
  );
}

export default App;
