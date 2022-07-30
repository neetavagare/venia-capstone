import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import InputBox from "../../atoms/InputBox/InputBox";
import ShippingDetails from './ShippingDetails';
export default function PaymentSelection(props) {
    return (
        <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 payment-section'>
            <h2 className="guest-check">Guest Checkout</h2>
            <ShippingDetails title="Shipping Information" type={"shipping-info"}></ShippingDetails>
            <ShippingDetails title="Shipping Method" type={"shipping-method"}></ShippingDetails>

            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 '>
                <h6 className="shipping-tag">3. Payment Information</h6>
                <div className="credit-radio">
                    <input type="radio" name="radio" className="radio" />
                    <label className="radio-card" >Credit Card</label>
                </div>
            </div>
            <div className="aem-Grid aem-Grid--4">
                <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4  aem-GridColumn--phone--12 '>
                    <InputBox label="Name on Card" type={"text"} name={'email'} classValue={'field'} />
                </div>
                <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 '>
                    <InputBox label="Credit Card Number" type={"text"} name={'email'} classValue={'field'} />
                </div>
                <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 end-field'>
                    <InputBox label="Expiration Date" type={"date"} name={'email'} classValue={'date-field'} />
                    <InputBox label="CVV" type={"number"} name={'email'} classValue={'cvv-field'} />
                </div>
            </div>
            <input type="checkbox" className="myCheck" />
            <label className="radio-paypal">Billing address same as shipping address</label>
            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 topbottom-border'>
                <input type="radio" name="radio" />
                <label className="radio-paypal" >PayPal</label>
            </div>
            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12  shipping-btn'>
                <button className="decorationNone cursor-pointercontinue-btn payment-btn" onClick={props.reviewToOrder}>continue to review order </button>
            </div>
            <div className="aem-GridColumn--phone--12 btn-section">
                <button className="decorationNone cursor-pointer mobile-continue-btn deskTopHide" onClick={props.reviewToOrder}>continue</button>
            </div>
        </div>
    )
}