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

  async function getProducts(choices) {
    setLoading(true);
    setError('');
    setProducts([]);

    let PRODUCTS_URL = `http://localhost:5000/products?skinType=${choices.skintype}&expense=${choices.expense}`;

    
    try {   
        let response = await fetch(PRODUCTS_URL); 
        if (response.ok) {
             let data = await response.json(); 
            setFilteredProducts(data);  
        } else {
            setError(`Server error: ${response.status} ${response.statusText}`);
        }
    } catch (err) {  
        setError(err.message);
    }

    setLoading(false);
}


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
