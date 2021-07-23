import React, {useState, useEffect} from "react";

export default function Cocktail(props) {

    // Setting the ingredients
    const [ingredients, setIngredients] = useState([]);
    const [measurements, setMeasurements] = useState([]);

    useEffect(() => {
        for (let index = 1; index < 16; index++) {
            if (props.data[`strIngredient${index}`] == null) {
              break;
            }

           /*  It is commonly used when you want to add a new item to a local data store, or display all stored items plus a new addition. A very simple version of this kind of action could look like so:

            let numberStore = [0, 1, 2];
            let newNumber = 12;
            numberStore = [...numberStore, newNumber]; */

          setIngredients((prevIngredients)=>[...prevIngredients, props.data[`strIngredient${index}`]])

        }

    }, [])

    // Setting the measurements
    useEffect(() => {
        for (let index = 1; index < 16; index++) {
            if (props.data[`strMeasure${index}`] == null) {
              break;
            }

          setMeasurements((prevMeasurements)=>[...prevMeasurements, props.data[`strMeasure${index}`]])
        }
        
    }, [])

    return (

          <>
          <div className="col-lg-3 col-md-6 col-sm-6 mb-3">
          <div className="card h-100 shadow">
          <img src={props.data.strDrinkThumb} className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">{props.data.strDrink}</h5>
          <p className="card-text">{props.data.strInstructions}</p>
          </div>
          <ul className="list-group list-group-flush ">
          <li className="list-group-item d-flex justify-content-between align-items-center">
          {props.data.strCategory}
          <span className="badge badge-primary badge-pill">{props.data.strGlass}</span>
          </li>

          {ingredients.map(ingredient => { 
                return <li className="list-group-item d-flex justify-content-between align-items-center">{ingredient}
                </li>
                })}
    
        </ul>
        </div>
        </div>
        </>
  
        
    )
}

   // STILL NEED TO CREATE AN OBJECT OF THE INGREDIENTS AND MEASUREMENTS IN ORDER TO DISPLAY THEM CLEAN TOGETHER
   {/*                
                <div>
                {measurements.map(measurement => { 
                return <p>{measurement}</p>
                })}
                </div>

                </div> */}