import React, {useState} from 'react';
import QuizPage from "./components/QuizPage";
import './App.css';

function App() {

const [isQuizPage, setIsQuizPage] = useState(true);

const handleChangeView = (isQuizPage) => {
  setIsQuizPage(isQuizPage);
};

  return (
    <div className="App">
      {isQuizPage ? <QuizPage/> : <App/>}

      <header className="App-header">
      <img className = "LandingImage" src="https://o.remove.bg/downloads/2f8c8ce7-6ae9-4f8d-a188-0ee60ab42753/pexels-ron-lach-8128069-removebg-preview.png"></img>
        <h1>
          Get your skin in the game
        </h1>

        <p>
        Skincare has seen an impressive boom in the last decade.
But with so many available brands and formulas on the market, who knows which products are best for you?<br></br>
<b>We do.</b>
 <br></br>
Take our SkinSaver™ quiz to find out which essential products best suit your skin type and budget, and create your personalized daytime skincare regimen.
        </p>

      <button className="SaveMySkinButton" 
      onClick={() => handleChangeView(true)}
      >
        Save My Skin
      </button>
      </header>
    </div>
  );
}

export default App;
