import React from 'react';
import {Link} from 'react-router-dom';

function ProductsPage(props){
    return (
        <div className="ProductsPage">
            <h2>All products</h2>
            <p> Our database currently contains {props.productCount} products.</p>
            <p>These are:</p>
            <ul>
                {props.products.map(
                    p => (
                        <li key = {p.id}>
                          <Link to={'/products'+p.id}>
                            {p.productName}</Link>  
                            </li>
                    )
                )
                }
            </ul>
        </div>
    );
}

export default ProductsPage;