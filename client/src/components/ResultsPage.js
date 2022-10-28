import React from "react";

function ResultsPage(props) {



    return (
        <div>
<h2> Thank you for completing our quiz!</h2>
<h3>Based on your answers, here are the 3 products that we recommend to create your 3-step morning skin regimen:</h3>

{/* 
{console.log(props.filteredProducts)} */}


Cleanser:

{props.filteredProducts.map(p => 
    <li key={p.id}> {p.productName} </li>)}


{/* <p>{props.filteredProducts}</p> */}



{/* <ResultsPage products2={props.products1}

setProductsCb2={id => props.setProductsCb2(id)}/> */}

</div>
    )
}

export default ResultsPage;
