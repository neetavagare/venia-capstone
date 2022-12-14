import React from 'react';
import RadioBox from '../../atoms/RadioBox/RadioBox';
import ShippingDetails from './ShippingDetails';
export default function ShppingSection(props) {
    return (
        <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 shipping-section '>
            <h2 className="guest-check">Guest Checkout</h2>
            <ShippingDetails handleShippingClick={props.handleShippingClick} title="Shipping Information" type={"shipping-info"}></ShippingDetails>

            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 radio-one'>
                <h6 className="shipping-tag">2. Shipping Method</h6>
                <RadioBox type="radio" id="radio-one" partailLabel={true} classValue={"radio-align"} labelclassValue={"radiotext-one"} text={"Standard Delivery "} partialText={"(4-8 days via USPS) FREE"} partailclassValue={"radio-subtext"}>
                </RadioBox>
            </div>
            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 radio-two'>
                <RadioBox type="radio" id="radio-two" partailLabel={true} classValue={"radio-align"} labelclassValue={"radiotext-two"} text={"Estimated Delivery "} partialText={"(4-8 days via USPS) FREE"} partailclassValue={"radio-subtext"}>
                </RadioBox>
            </div>
            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 radio-three'>
                <RadioBox type="radio" id="radio-three" partailLabel={true} classValue={"radio-align"} labelclassValue={"radiotext-three"} text={"Next Delivery"} partialText={"(Next days via FedEx) $53.61"} partailclassValue={"radio-subtext"}>
                </RadioBox>
            </div>
            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 shipping-btn mobile-hide'>
                <button className="decoration-none cursor-pointer continue-btn payment-btn" onClick={props.paymentToMethod}>continue to payment</button>
            </div>
            <div className="aem-GridColumn--phone--12 btn-section">
                <button className="decoration-none cursor-pointer mobile-continue-btn desktop-hide" onClick={props.paymentToMethod}>continue</button>
            </div>
            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 estimating'>
                <div className="section2">
                    3. Payment Information
                </div>
            </div>
        </div>
    )
}