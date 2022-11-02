import React from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.css';

function LandingPage(){

return(


    <div className = "LandingGrid">


  <div className="LandingImageDiv">
    <img src="https://i.imgur.com/R5PvBZM.png" className="LandingImage"/>
    </div>
   
   <div className="LandingText">
        <h1>
          Get your skin<br></br> in the game
        </h1>
        <br></br>
        <p className="LandingParagraph">
        Skincare has seen an impressive boom in the last decade.
        But with so many available brands and formulas on the market, who knows which products are best for you?<br></br>
        <b>We do.</b>
        <br></br>
        Take our SkinSaver™ quiz to find out which essential products best suit your skin type and budget, and create your personalized daytime skincare regimen.
        </p>
        <Link to="/skinquiz">
        <button className="SaveMySkinButton">
        Save My Skin
        </button>
        </Link>
    </div>
  </div>

      
);

}

export default LandingPage;