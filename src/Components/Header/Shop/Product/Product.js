import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { product, haldleClick } = props
    const { img, name, price, ratings, seller } = props.product

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <span className='product-price'>Price ${price} </span> <br />
                <span className='product-seller'>Manufacturer : {seller}</span> <br />
                <span className='product-rating'>Rating : {ratings} star</span>
            </div>
            <button onClick={() => haldleClick(product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;