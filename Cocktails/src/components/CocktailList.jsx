import { useEffect, useState } from "react";

function CocktailList() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => response.json())
      .then((data) => {
        setCocktails(data.drinks || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading cocktails...</p>;
  if (error) return <p>Error: {error}</p>;
  if (cocktails.length === 0) return <p>No cocktails found.</p>;

  return (
    <div className="cocktail-list">
      {cocktails.map((drink) => (
        <div key={drink.idDrink} className="cocktail-card">
          <h2>{drink.strDrink}</h2>
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            className="cocktail_pic"
          />
          <p><strong>Category:</strong> {drink.strCategory}</p>
          <p><strong>Alcoholic:</strong> {drink.strAlcoholic}</p>
          <p><strong>Glass:</strong> {drink.strGlass}</p>
          <p><strong>Ingredients:</strong></p>
          <ul>
            {[...Array(15).keys()].map((i) => {
              const ingredient = drink[`strIngredient${i + 1}`];
              const measure = drink[`strMeasure${i + 1}`];
              return ingredient ? (
                <li key={i}>
                  {measure ? measure : ""} {ingredient}
                </li>
              ) : null;
            })}
          </ul>
          <p><strong>Instructions:</strong> {drink.strInstructions}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default CocktailList;
