import React from "react";
import './ResultsPage.css';


function ResultsPage(props) {



    return (
        <div className="ResultsContainer">
<h2> Thank you for completing our quiz!</h2>
<h3>Based on your answers, here are the 3 products that we recommend to create your 3-step morning skin regimen:</h3>

{/* 
{console.log(props.filteredProducts)} */}




{props.filteredProducts.map(p => 
<li className="Results" key={p.id}>
    For&nbsp;

    <b>
    {p.productType} </b>
      use:

    <br></br>

    <div class="productInfo">
    {p.productName}</div>
     by &nbsp; 

    <div class="productInfo">
        {p.brandName}</div>
   
    
    <em>
    {p.descrip}</em>
    
    </li>
    
    )}


{/* <p>{props.filteredProducts}</p> */}



{/* <ResultsPage products2={props.products1}

setProductsCb2={id => props.setProductsCb2(id)}/> */}

</div>
    )
}

export default ResultsPage;
