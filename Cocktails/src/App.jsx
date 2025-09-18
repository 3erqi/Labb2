import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import CocktailList from './components/CocktailList'

const port = 3000;
const url = "http://localhost:";
const path = "/api/hello";

async function fetchData () {
  const response = await fetch(`${url}${port}${path}`);
  const data = await response.text();
  return data;
}

function App() {

  return (
    <>
      <Header />

      <CocktailList />

      <Footer />
    </>
  )
}

export default App
