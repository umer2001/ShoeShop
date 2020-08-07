import React, {useState, createContext} from 'react';

export const Cartcontext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    return (
        <Cartcontext.Provider value={[cart, setCart]}>
            {props.children}
        </Cartcontext.Provider>
    )
}