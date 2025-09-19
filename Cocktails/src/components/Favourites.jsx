import { Link } from "react-router-dom";

function Favourites({ favourites, removeFromFavourites }) {
  if (favourites.length === 0) {
    return <p className="cocktail_list">You don’t have any favourites yet.</p>;
  }

  return (
    <div className="cocktail_list">
      <h2 className="cocktail_list">My Favourites</h2>
      <hr />
      {favourites.map((drink) => (
        <div key={drink.idDrink} className="cocktail_list">
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
            onClick={() => removeFromFavourites(drink.idDrink)}
          >
            Remove from favourites
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Favourites;
