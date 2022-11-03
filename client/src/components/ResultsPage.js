import React from "react";
import './ResultsPage.css';


function ResultsPage(props) {

    return (
        <div className="ResultsContainer">
            <h2> Thank you for completing our quiz!</h2>
            <h3>Based on your answers, here are the 3 products that we recommend to create your 3-step morning skin regimen:</h3>


{/* SHOWCASE CODE: */}
        <div className="ResultsGrid">

            {props.filteredProducts.map(p => 
            <div className="Results" key={p.id}>
                For&nbsp;

                <b>
                {p.productType} </b>
                use:
                <br></br>
                
                <img src={p.img} className="ResultsImages"/>
                <br></br>

                <div className="productInfo">
                {p.productName}</div>
                by &nbsp; 

                <div className="productInfo">
                    {p.brandName}</div>
            
                <br></br>

                <em>
                {p.descrip}</em>

                <br></br>
                <br></br>

                Retail price: €
                {p.price}

                 <br></br>
                </div>
                
                )}

            </div>
        </div>
    )
}

export default ResultsPage;
