import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from './Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        console.log('product load use fetch')
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        console.log('second step is here now')
        const storedCart = getStoredCart()
        const savedcart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                savedcart.push(addedProduct)

            }
            setCart(savedcart);
        }
    }, [products])

    const haldleClick = (selectProduct) => {
        let newCart = [];
        const exist = cart.find(product => product.id === selectProduct.id)
        if (!exist) {
            selectProduct.quantity = 1
            newCart = [...cart, selectProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectProduct.id)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }

        setCart(newCart)
        addToDb(selectProduct.id)
    }
    // console.log(products)
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        product={product}
                        haldleClick={haldleClick}
                        key={product.id}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;