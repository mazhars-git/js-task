import React, { useEffect, useState } from 'react';
import ProductsData from '../../FakeData/FakeData.json';
import ProductData from './ProductData';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(ProductsData);
    }, [])

    console.log(products);
    return (
        <div className="container">
            <div className="row py-5">
                {
                    products.map(pd => <ProductData item={pd}></ProductData>)
                }
            </div>
            
        </div>
    );
};

export default Products;