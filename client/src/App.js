import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom';


import LandingPage from './components/LandingPage';
import QuizPage from "./components/QuizPage";
import ProductsPage from './components/ProductsPage';

const InitialProducts = [
  {id: 1, category: 'Cleanser', productName: 'Cleanser 1'},
  {id: 2, category: 'Cleanser', productName: 'Cleanser 2'},
  {id: 3, category: 'Moisturiser', productName: 'Moisturiser 1'},
];

function App() {

// const [isLandingPage, setIsLandingPage] = useState (isLandingPage);

const [products, setProducts] = useState(InitialProducts);

  return (

    <div className="App">

  <NavBar/>

     <Routes>
      <Route path="/" element = {<LandingPage/>}/>

      <Route path="/skinquiz" element = {<QuizPage/>}/>

      <Route path="/products" element = {<ProductsPage productCount={products.length} products={products}/>}/>
     </Routes>

     {/* <LandingPage/> */}

      </div>

  );

  }

export default App;
