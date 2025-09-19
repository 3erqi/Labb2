import { useState, useEffect } from 'react'
import './App.css'
import CocktailList from './components/CocktailList'
import RootLayout from './layout/RootLayout'
import Favourites from './components/Favourites'
import Home from './components/Home'
import CocktailDetail from './components/CocktailDetail'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

const port = 3000;
const url = "http://localhost:";
const path = "/api/hello";

async function fetchData () {
  const response = await fetch(`${url}${port}${path}`);
  const data = await response.text();
  return data;
}

function App() {

   const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites) {
      setFavourites(JSON.parse(storedFavourites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourites = (drink) => {
    if (!favourites.some((fav) => fav.idDrink === drink.idDrink)) {
      setFavourites([...favourites, drink]);
    }
  };

  const removeFromFavourites = (id) => {
    setFavourites(favourites.filter((fav) => fav.idDrink !== id));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route
            path="cocktails"
            element={
              <CocktailList
                favourites={favourites}
                addToFavourites={addToFavourites}
                removeFromFavourites={removeFromFavourites}
              />
            }
          />
          <Route
            path="saved-cocktails"
            element={
              <Favourites
                favourites={favourites}
                removeFromFavourites={removeFromFavourites}
              />
            }
          />
          <Route
            path="/"
              element={<Home />}
            />
          <Route
            path="cocktails/:id"
            element={<CocktailDetail favourites={favourites} 
            addToFavourites={addToFavourites} 
            removeFromFavourites={removeFromFavourites} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  
}

export default App
