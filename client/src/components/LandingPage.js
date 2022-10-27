import React from 'react';
import './LandingPage.css';

function LandingPage(){

// const [isLandingPage, setIsLandingPage] = useState (true);

// const handleSubmit = (isQuizPage) => {
//     setIsQuizPage(isQuizPage)

//for landing page button: just wrap within the link to Quiz (react nav buttons)

return(
    <div className = "LandingDiv">
   
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
    //   onClick={() => handleSubmit(true)}
      >
        Save My Skin
      </button>

      </div>
);

}

export default LandingPage;