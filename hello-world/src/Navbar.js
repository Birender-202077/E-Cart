import React from 'react'

const Navbar = (props) => {

        return(
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                  <img  style={styles.cartIcon} src='https://cdn-icons-png.flaticon.com/512/1170/1170678.png' alt='cart-icon'/>
                  <span style={styles.cartCount}>{props.count}</span>
                </div>

                </div>

        
        )
    }

const styles = {
    cartIcon: {
      height: 32,
      marginRight: 50
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 10px',
      marginRight: '30px',
      position: 'absolute',
      right: 0,
      top: -7
    }
  };

export default Navbar;