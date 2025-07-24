import React, { useEffect, useState } from "react";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Fetch cart items from localStorage
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (storedCartItems) {
            setCartItems(storedCartItems);
        }
    }, []);

    return (
        <div className="cartContainer">
            {cartItems.map((item, index) => (
                <img
                    src={item} // Replace with your image source property
                    alt={`Item ${index + 1}`}
                    className="cartItemImage"
                    key={index}
                />
                
            ))}
        </div>
    );
}

export default Cart;
