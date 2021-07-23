  import React, {useState, useEffect} from "react";
  import axios from "axios";
  import Nav from './Nav';
  import Cocktail from './Cocktail'
  
  function Cocktails() {

    const [cocktails, setCocktails] = useState([]);
    const [search, setSearch] = useState(""); 
    const [query, setQuery]= useState("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");

    const api_url = (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)

    useEffect(() => { 
      const getCocktails = async () => {
      const response = await axios.get(query);
      setCocktails(response.data.drinks);
      }
      getCocktails();
      console.log('getting cocktails');
    }, [query]);
  
    // We want to set our filter equal to the value of the search bar
    // Passing an event object to actually get the value

    const updateSearch = (e) => {
      setSearch(e.target.value);
      console.log('updating search');
    }
  
    const updateQuery = () => {
      let url = api_url + search;
      setQuery(url);
      console.log('updating query');
    }

    return (
      <div className="App">

      <Nav
          search={search}
          updateSearch={updateSearch} 
          updateQuery={updateQuery}
      />

            <div className="container-fluid">
            <div className="row cocktail-grid">
            {cocktails.map(cocktail => { 
                return <Cocktail data={cocktail}/>
                })}
            </div>
            </div>
      </div>
    )
}
  
  export default Cocktails;