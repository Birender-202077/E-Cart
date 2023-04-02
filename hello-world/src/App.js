import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products : [
            {
                price: 5000.00,
                qty: 1,
                title: 'Watch',
                img: 'https://media.istockphoto.com/id/1368179045/photo/a-silver-stainless-steel-analog-watch.jpg?s=1024x1024&w=is&k=20&c=Hcj8KEmIDZBTS3aM60Ipw1K6mt4LT6fUBbbwauXau-E=',
                id:1
    
            },
            {
                price: 20000.00,
                qty: 1,
                title: 'Mobile Phone',
                img: ' https://media.istockphoto.com/id/1254994299/photo/cropped-image-of-happy-girl-using-smartphone-device-while-chilling-at-home.jpg?s=1024x1024&w=is&k=20&c=MUKOLhhrAx99ShxWIsndpwVJBYvgRZ0bx3_Q-63qScA=',
                id:2
    
            },
            {
                price: 70000.00,
                qty: 1,
                title: 'Laptop',
                img: 'https://media.istockphoto.com/id/1091348950/photo/close-up-of-hands-typing-on-laptop-night-work-concept.jpg?s=1024x1024&w=is&k=20&c=D3D_haO8fZSGSNkdr6DPLzxbEDBrpSrNYvrAz00J1n4=',
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
  getCartCount = () => {
    const { products } = this.state;

    let count = 0 ;
    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }

  getTotal = () =>{
    const { products } = this.state;
    let cartTotal = 0;

    products.map((product)=>{
        return cartTotal = cartTotal + product.qty * product.price
    })
     return cartTotal;
  }

 render(){
  const{products} = this.state;
   return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart
      products = {products}
      onIncreaseQuantity = {this.handleIncreaseQuantity}
      onDecreaseQuantity = {this.handleDecreaseQuantity}
      onDeleteProduct = {this.handleDeleteProduct}
      />
    <div>TOTAL: {this.getTotal()}</div>
    </div>
  );
 }
}

export default App;
