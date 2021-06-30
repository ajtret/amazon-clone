import React from 'react'
import "./checkout.css"

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className= "checkout_ad" 
                      src="https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png" />
            <div>
                <h2 classname="checkout_title"> Your Shopping Basket </h2>
                
                </div>          
            </div>
            <div className="checkout_right">
                <h2>The Subtotal Will Go Here</h2>
            </div>
        </div>
    )
}

export default Checkout
