import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    return (
        <div>
            {props.products.map((product, i) =>
                <div key={i}>
                    <Link to={`/products/${product._id}`}>
                        <span>{product.title}</span>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default ProductList;