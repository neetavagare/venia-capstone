import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import InputBox from "../../atoms/InputBox/InputBox";
import RadioBox from '../../atoms/RadioBox/RadioBox';
import ShippingDetails from './ShippingDetails';
export default function ShppingSection(props) {
    return (
        <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 shipping-section '>
            <h2 className="guest-check">Guest Checkout</h2>
            <ShippingDetails title="Shipping Information" type={"shipping-info"}></ShippingDetails>

            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 radio-one'>
                <h6 className="shipping-tag">2. Shipping Method</h6>
                <RadioBox type="radio"  id="radio-one" classValue={"radio-align"} labelclassValue={"radiotext-one"} text={"Standard Delivery (4-8 days via USPS) FREE"}>
                </RadioBox>
            </div>
            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 radio-two'>
                <RadioBox type="radio" id="radio-two" classValue={"radio-align"} labelclassValue={"radiotext-two"} text={"Estimated Delivery (4-8 days via USPS) FREE"}>
                </RadioBox>
            </div>
            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 radio-three'>
                <RadioBox type="radio" id="radio-three" classValue={"radio-align"} labelclassValue={"radiotext-three"} text={"Next Delivery (Next days via FedEx) $53.61"}>
                </RadioBox>
            </div>
            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 shipping-btn mobileHide'>
                <button className="decorationNone cursor-pointercontinue-btn payment-btn" onClick={props.paymentToMethod}>continue to payment</button>
            </div>
            <div className="aem-GridColumn--phone--12 btn-section">
                <button className="decorationNone cursor-pointer mobile-continue-btn deskTopHide" onClick={props.paymentToMethod}>continue</button>
            </div>
            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 estimating'>
                <div className="section2">
                    3. Payment Information
                </div>
            </div>
        </div>
    )
}