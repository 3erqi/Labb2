import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CocktailList({ favourites, addToFavourites, removeFromFavourites }) {
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

  const isFavourite = (id) => favourites.some((fav) => fav.idDrink === id);

  if (loading) return <p>Loading cocktails...</p>;
  if (error) return <p>Error: {error}</p>;
  if (cocktails.length === 0) return <p>No cocktails found.</p>;

  return (
    <div className="cocktail_list">
      {cocktails.map((drink) => (
        <div key={drink.idDrink} className="cocktail_card">
          <h2><Link className="drink_link" to={`/cocktails/${drink.idDrink}`}>{drink.strDrink}</Link></h2>
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            className="cocktail_pic"
          />
          <p><strong>Category:</strong> {drink.strCategory}</p>
          <p><strong>Alcoholic:</strong> {drink.strAlcoholic}</p>
          <button
            className="save_button"
            onClick={() =>
              isFavourite(drink.idDrink)
                ? removeFromFavourites(drink.idDrink)
                : addToFavourites(drink)
            }
          >
            {isFavourite(drink.idDrink)
              ? "Remove from favourites"
              : "Favourite"}
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default CocktailList;
