import React from 'react'

const CartItem = (props) => {
   

    // increaseQuantity = () => {
    //     // console.log(this.state)
    //     //setState form 1 
    //     this.setState({
    //         qty: this.state.qty + 1
    //     },() => {
    //         console.log('render',this.state)
    //     });

    //     // console.log(this.state)
    // }

    // decreaseQuantity = () => {
    //     //setstate form 2 
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty - 1
    //         }
    //     });
    // }

   
        console.log('render',props)
        // const{title,price,qty} = this.state
        const{title,price,qty} = props.product

        //destructuring of increaser and decrease function
        const{product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = props;

        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.images} src={product.img} alt="material"/>
                </div>

                <div className='right-block'>
                    {/* <div style={{fontSize: 25}}>{this.state.title}</div> */}

                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs. {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        
                        <img 
                        alt="increase"
                        src= "https://cdn-icons-png.flaticon.com/512/10238/10238177.png"
                        className='action-icons'
                        // onClick={this.increaseQuantity.bind(this)}
                        // onClick={()=> this.props.onIncreaseQuantity(this.props.product)} 
                        onClick={() => onIncreaseQuantity(product)}
                        />

                        <img 
                        alt="decrease" 
                        src= "https://cdn-icons-png.flaticon.com/512/10238/10238638.png" 
                        className='action-icons'
                        onClick={() => onDecreaseQuantity(product)} />

                        <img 
                        alt="delete" 
                        src= "https://cdn-icons-png.flaticon.com/512/3221/3221897.png" 
                        className='action-icons' 
                        onClick={() => onDeleteProduct(product.id)}
                        />

                    </div>

                </div>

            </div>
        )
    }


const styles = {
    images: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;