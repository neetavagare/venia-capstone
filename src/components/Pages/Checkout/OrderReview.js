import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, AnchorV2, Button, Image, Paragraph } from '../../atoms';
import ShippingDetails from './ShippingDetails';
import OrderItem from './OrderItem';

export default function OrderReview(props) {
    return (
        <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 shipping-section '>
            <h2 className="guest-check">Guest Checkout</h2>
            <ShippingDetails title="Shipping Information" type={"shipping-info"}></ShippingDetails>
            <ShippingDetails title="Shipping Method" type={"shipping-method"}></ShippingDetails>
            <ShippingDetails title="Payment Information" type={"payment-method"}></ShippingDetails>
            <OrderItem cartItems={props.cartItems}></OrderItem>
            <div className='place-order-button-container'>
                <Button onClick={props.handleClick} classValue="place-order-button" on> place order</Button>
                <div className='term-condition'> By clicking confirm order you agree to our 
                   <AnchorV2 classValue="text-decoration-underline" href='#'> Terms and Conditions</AnchorV2>  </div>
            </div>
        </div>
    )
}