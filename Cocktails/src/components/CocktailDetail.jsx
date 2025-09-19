import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CocktailDetail({ favourites, addToFavourites, removeFromFavourites }) {
  const { id } = useParams(); 
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCocktail(data.drinks[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const isFavourite = (id) => favourites.some((fav) => fav.idDrink === id);

  if (loading) return <p>Loading cocktail...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!cocktail) return <p>Cocktail not found.</p>;

  return (
    <div className="cocktail_list">
      <h2>{cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="cocktail_pic" />
      <p><strong>Category:</strong> {cocktail.strCategory}</p>
      <p><strong>Alcoholic:</strong> {cocktail.strAlcoholic}</p>
      <p><strong>Glass:</strong> {cocktail.strGlass}</p>
      <p><strong>Instructions:</strong> {cocktail.strInstructions}</p>

      <p><strong>Ingredients:</strong></p>
      <ul>
        {[...Array(15).keys()].map((i) => {
          const ingredient = cocktail[`strIngredient${i + 1}`];
          const measure = cocktail[`strMeasure${i + 1}`];
          return ingredient ? (
            <li key={i}>
              {measure ? measure : ""} {ingredient}
            </li>
          ) : null;
        })}
      </ul>

      <button
        className="save_button"
        onClick={() =>
          isFavourite(cocktail.idDrink)
            ? removeFromFavourites(cocktail.idDrink)
            : addToFavourites(cocktail)
        }
      >
        {isFavourite(cocktail.idDrink) ? "Remove from favourites" : "Add to favourites"}
      </button>
    </div>
  );
}

export default CocktailDetail;
