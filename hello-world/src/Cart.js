import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{

    constructor(){
        super();
        this.state = {
            products : [
                {
                    price: 'Rs 5000',
                    qty: 1,
                    title: 'Watch',
                    img: '',
                    id:1
        
                },
                {
                    price: 'Rs 20000',
                    qty: 1,
                    title: 'Mobile Phone',
                    img: '',
                    id:2
        
                },
                {
                    price: 'Rs 70000',
                    qty: 1,
                    title: 'Laptop',
                    img: '',
                    id:3
                }
            ]
        }
    }

    render(){
        const{products} = this.state;
        return(
        <div className="cart">
                {products.map((product) => {
                        return <CartItem product = {product} key={product.id}/>
                })}
           
        </div>
        );
    }
}

export default Cart;