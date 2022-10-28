import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {Routes, Route} from 'react-router-dom';


import LandingPage from './components/LandingPage';
import QuizPage from "./components/QuizPage";
import ResultsPage from './components/ResultsPage';





function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // async function pause(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));

  async function getProducts(choices) {
    //searchChoices
    // Reset state before a new fetch()
    setLoading(true);
    setError('');
    setProducts([]);

    // Pause only to show that the "loading" message works
    // await pause(500);

    let PRODUCTS_URL = `http://localhost:5000/products?skinType=${choices.skintype}&expense=${choices.expense}`;

    // console.log(PRODUCTS_URL)
    try {  // "Try" an operation that might fail
        //when i do fetch I need to send with WHERE params in url
        //can get those params in initial_form
        
        let response = await fetch(PRODUCTS_URL);  // wait for initial response
        if (response.ok) {
            // Server received and understood my request
            let data = await response.json();  // wait again, for data
            // console.log(data);
            setFilteredProducts(data);  // update state
        } else {
            // Server received my request but can't fulfill it
            setError(`Server error: ${response.status} ${response.statusText}`);
        }
    } catch (err) {  // "Catch" the failure and recover
        // Network error; server not contacted
        setError(err.message);
    }

    setLoading(false);
}


// const [products, setProducts] = useState(InitialProducts);

// const handleGetProducts = (newChoices) => {
//   setProducts((state) => [...state, newChoices]);


  return (

    <div className="App container">
      


  <NavBar/>

     <Routes>
      <Route path="/" element = {<LandingPage/>}/>


      <Route path="/skinquiz" element = {<QuizPage getProductsCb={choices => getProducts(choices)}/>} />
   

      <Route path="/results" element = {<ResultsPage filteredProducts={filteredProducts} />}/>

     </Routes>



     
      </div>

  );

}
  

export default App;
