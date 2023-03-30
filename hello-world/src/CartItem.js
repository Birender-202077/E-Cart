import React from 'react'

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 'Rs 10000',
            qty: 'Qt:1',
            title: 'Mobile Phone',
            img: ''

        }
    }
    render(){
        const{title,price,qty} = this.state
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.images}/>
                </div>

                <div className='right-block'>
                    {/* <div style={{fontSize: 25}}>{this.state.title}</div> */}
                    
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>{price}</div>
                    <div style={{color: '#777'}}>{qty}</div>
                    <div className='cart-item-actions'>
                        {/* {buttons} */}
                        <img alt="increase" src= "https://cdn-icons-png.flaticon.com/512/10238/10238177.png" className='action-icons' />
                        <img alt="decrease" src= "https://cdn-icons-png.flaticon.com/512/10238/10238638.png" className='action-icons' />
                        <img alt="delete" src= "https://cdn-icons-png.flaticon.com/512/3221/3221897.png" className='action-icons' />

                    </div>

                </div>

            </div>
        )
    }
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