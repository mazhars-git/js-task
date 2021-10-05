import React from 'react';
import Products from '../Products/Products';
import ShopCart from '../ShopCart/ShopCart';

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                    <Products />
                </div>
                <div className="col-md-2">
                    <ShopCart />
                </div>
            </div>
        </div>
    );
};

export default Home;