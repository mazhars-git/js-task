import React from 'react';

const ProductData = (props) => {
    const {pd_name, image, price} = props.item;
    const handleClick = () => {
        console.log("clicked")
    }
    return (
        <div className="col-md-4">
            <div onClick={handleClick} className="text-center pb-3">
                <img style={{width: '150px'}} src={image} alt="" />
                <h6 className="mt-1">{pd_name}</h6>
            </div>
        </div>
    );
};

export default ProductData;