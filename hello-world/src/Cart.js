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

    handleIncreaseQuantity = (product) => {
        console.log("Hey increaes the qty of ", product)
        const{products} = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({products})
    }

    handleDecreaseQuantity = (product) => {
        console.log("Hey increaes the qty of ", product)
        const{products} = this.state;

        const index = products.indexOf(product);
       
        if(products[index].qty===0){
            return;
        }

        products[index].qty -= 1;

        this.setState({products})
    }

    handleDeleteProduct = (id) => {
        const{products} = this.state;

        const items = products.filter((item) => item.id !== id)

        this.setState({
            products : items
        })
    }

    render(){
        const{products} = this.state;
        return(
        <div className="cart">
                {products.map((product) => {
                        return (
                        <CartItem 
                        product = {product} 
                        key={product.id}
                        onIncreaseQuantity = {this.handleIncreaseQuantity}
                        onDecreaseQuantity = {this.handleDecreaseQuantity}
                        onDeleteProduct = {this.handleDeleteProduct}
                        />
                        
                )})}
           
        </div>
        );
    }
}

export default Cart;