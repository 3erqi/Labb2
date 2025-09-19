import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, BrowserRouter, Routes } from 'react-router'
import App from './App.jsx'
import RootLayout from './layout/RootLayout.jsx'
import Favourites from './components/Favourites.jsx'
import CocktailList from './components/CocktailList.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
