import React from 'react';
import { Button, CheckBox } from '../../atoms';
import InputBox from "../../atoms/InputBox/InputBox";
import RadioBox from '../../atoms/RadioBox/RadioBox';
import ShippingDetails from './ShippingDetails';

export default function PaymentSelection(props) {
    return (
        <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 payment-section'>
            <h2 className="guest-check">Guest Checkout</h2>
            <ShippingDetails handleShippingClick={props.handleShippingClick} title="Shipping Information" type={"shipping-info"}></ShippingDetails>
            <ShippingDetails handleShippingClick={props.handleShippingClick} title="Shipping Method" type={"shipping-method"}></ShippingDetails>

            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 '>
                <h6 className="shipping-tag">3. Payment Information</h6>
                <RadioBox labelclassValue={"radio-card"} type="radio" id="radio-three4" classValue={"radio"} containerClass={"credit-radio"} text={"Credit Card"}>
                </RadioBox>
            </div>
            <div className="aem-Grid aem-Grid--4">
                <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4  aem-GridColumn--phone--12 '>
                    <InputBox label="Name on Card" type={"text"} name={'email'} classValue={'field'} />
                </div>
                <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 '>
                    <InputBox label="Credit Card Number" type={"text"} name={'email'} classValue={'field'} />
                </div>
                <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 end-field'>
                    <InputBox label="Expiration Date" type={"text"} name={'email'} classValue={'date-field'} />
                    <InputBox label="CVV" labelClass="label-cvv" isIcon={true} type={"number"} name={'email'} classValue={'cvv-field'} />
                </div>
            </div>
            <div className='billing-checkbox-container'>
                 <CheckBox labelClass={"radio-paypal"} type={"checkbox"} classValue="myCheck" text={"Billing address same as shipping address"}>
                </CheckBox> 
            </div>
            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 topbottom-border'>
                <RadioBox type="radio" id="radio-three" classValue={"radio-align"} labelclassValue={"radiotext-three"} text={"PayPal"}>
                </RadioBox>
            </div>
            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12  shipping-btn'>
                <Button onClick={props.reviewToOrder} classValue="decoration-none cursor-pointer payment-btn">
                    continue to review order
                </Button>
            </div>
            <div className="aem-GridColumn--phone--12 btn-section">
                <Button onClick={props.reviewToOrder} classValue="decoration-none cursor-pointer mobile-continue-btn desktop-hide">
                    continue
                </Button>
            </div>
        </div>
    )
}