import React from "react";
import { connect } from "react-redux";
import { getCarts, hideLoader, showLoader, addProductToCart, replaceCart } from "../../../redux/actions/index.js";
import { useState } from "react";
import Loader from "../../atoms/Loader/Loader";
import PricingSummery from '../ShopingCart/PricingSummery';
import Banner from '../ShopingCart/Banner';
import { DropDownOption, StateOption } from '../../../config/Constant';
import InputBox from "../../atoms/InputBox/InputBox";
import DropDownWithLabel from "../../atoms/DropDown/DropDownWithLabel";
import Icon from '../../atoms/Icon/Icon';



function Guestcheckout(props) {

    let [isPayment, setIsPayment] = useState(false)
    let [isShipping, setIsShipping] = useState(false)
    let [checkout, setCheckout] = useState(true)
    let [isReview, setIsReview] = useState(false)

    useState(async () => {
        props.showLoader();
        props.getCarts();
        props.hideLoader();
    }, []);

    let totalPrice = 0;

    props.carts.forEach(element => {
        totalPrice += element.price;
    });

    totalPrice = Math.round(totalPrice)

    const reviewToOrder = () => {
        setCheckout(false)
        setIsShipping(false);
        setIsPayment(false);
        setIsReview(true);
    }
    const shippingToMethod = () => {
        setCheckout(false)
        setIsShipping(true);
        setIsPayment(false);
        setIsReview(false);
    }
    const paymentToMethod = () => {
        setCheckout(false)
        setIsShipping(false);
        setIsPayment(true);
        setIsReview(false);
    }
    const checkoutTo = () => {
        setCheckout(false)
    }


    return (
        <form className="page-container mobile-container" onsubmit="return false">
            <Loader isLoading={props.isLoading}></Loader>
            <Banner text="Checkout" />
            <div className='aem-Grid aem-Grid--12'>
                {
                    checkout &&
                    <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 field' >

                        <div className='aem-Grid aem-GridColumn--default--8 aem-GridColumn--phone--12 ' >
                            <h2 className="guest-check">Guest Checkout</h2>
                            <h6 className="contact-text">Contact information</h6>
                            <div className="delivery-text">We’ll use these details to keep you informed on your delivery.</div>

                            <div className="aem-Grid aem-Grid--8">
                                <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--8 mobile-spacing '>
                                    <InputBox label="Email" type={"text"} name={'email'} placeholder={'john@example.com'} classValue={'email'} />
                                    <h6 className="text-shipping">1.Shipping Information</h6>

                                    <div className="mobile-spacing ">
                                        <DropDownWithLabel label="Country" classValue="country-dropdown" options={DropDownOption}></DropDownWithLabel>
                                    </div>
                                </div>
                                <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--8 mobile-spacing'>
                                    <InputBox label="Phone Number" type={"number"} name={'phone'} placeholder={'99-1212-1212'} classValue={'email'} />
                                </div>
                            </div>
                            <div className="aem-Grid aem-Grid--8 name-section">
                                <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--8 mobile-spacing  '>
                                    <InputBox label="First Name" type={"text"} name={'fname'} classValue={'email'} />
                                </div>
                                <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--8 mobile-spacing '>
                                    <InputBox label="Last Name" type={"number"} name={'lname'} classValue={'email'} />
                                </div>
                            </div>
                            <div className="aem-Grid aem-Grid--8 address-section">
                                <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--8 mobile-spacing  '>
                                    <InputBox label="Street Address" type={"text"} name={'address1'} classValue={'email'} />
                                </div>
                                <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--8 mobile-spacing '>
                                    <InputBox label="Street Address2" type={"text"} name={'address2'} classValue={'email'} />
                                </div>
                            </div>
                            <div className="aem-Grid aem-Grid--8 checkoutend">
                                <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--8 mobile-spacing '>
                                    <InputBox label="City" type={"text"} name={'city'} placeholder={'New York'} classValue={'email'} />
                                </div>
                                <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--8 mobile-spacing '>
                                    <div className="aem-Grid aem-Grid--4">
                                        <div className='aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--4 mobile-spacing ' >
                                            <DropDownWithLabel label="State" classValue="state-dropdown" options={StateOption}></DropDownWithLabel>
                                        </div>
                                        <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--4 mobile-spacing ">
                                            <InputBox label="ZIP" type={'text'} name={"zip"} placeholder={'10001'} classValue={'zip'} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="next-page aem-GridColumn--phone--12 ">
                                <button className="decorationNone cursor-pointer continue-btn mobileHide" onClick={shippingToMethod}>continue to shipping method</button>
                            </div>
                            <div className="aem-GridColumn--phone--12 btn-section">
                                <button className="decorationNone cursor-pointer mobile-continue-btn deskTopHide" onClick={shippingToMethod}>continue</button>
                            </div>
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 estimating'>
                                <div className="section1">
                                    2. Shipping Method
                                </div>
                                <div className="section2">
                                    3. Payment Information
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {
                    isShipping &&
                    <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 shipping-section '>
                        <h2 className="guest-check">Guest Checkout</h2>
                        <div className="aem-Grid aem-Grid--8 field-details">
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6'>
                                <h6 className="info-text">Shipping Information</h6>
                            </div>
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--2 field-edit'>
                                <Icon name="Edit-2"></Icon>
                                <h6 className="text-edit mobileHide">Edit</h6>
                            </div>

                            <div className="aem-Grid aem-Grid--4 aem-GridColumn--phone--4">
                                <div className="content-one">
                                    q_farhan@gmail.com +1 (555) 229-3367
                                </div>
                                <div className="content-two">
                                    Qadim Farhan 1098 Wapello Street Altadena, California 91001 United States
                                </div>
                            </div>
                        </div>
                        <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 radio-one'>
                            <h6 className="shipping-tag">2. Shipping Method</h6>
                            <input type="radio" name="radio" />
                            <label className="radiotext-one" >Standard Shipping (4-8 business days via USPS) FREE</label>
                        </div>
                        <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 radio-two'>
                            <input type="radio" name="radio" />
                            <label className="radiotext-two">Express Delivery (2-5 business days via USPS) $17.95</label>
                        </div>
                        <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 radio-three'>
                            <input type="radio" name="radio" />
                            <label className="radiotext-three">Next Day Delivery (Next business days via FedEx) $53.61</label>
                        </div>
                        <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 shipping-btn mobileHide'>
                            <button className="decorationNone cursor-pointercontinue-btn payment-btn" onClick={paymentToMethod}>continue to payment</button>
                        </div>
                        <div className="aem-GridColumn--phone--12 btn-section">
                            <button className="decorationNone cursor-pointer mobile-continue-btn deskTopHide" onClick={paymentToMethod}>continue</button>
                        </div>
                        <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 estimating'>
                            <div className="section2">
                                3. Payment Information
                            </div>
                        </div>
                    </div>
                }
                {
                    isPayment &&
                    <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 payment-section'>
                        <h2 className="guest-check">Guest Checkout</h2>
                        <div className="aem-Grid aem-Grid--8 field-details">
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6'>
                                <h6 className="info-text">Shipping Information</h6>
                            </div>
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--2 field-edit'>
                                <Icon name="Edit-2"></Icon>
                                <h6 className="text-edit mobileHide">Edit</h6>
                            </div>
                            <div className="aem-Grid aem-Grid--4 aem-GridColumn--phone--4">
                                <div className="content-one">
                                    q_farhan@gmail.com +1 (555) 229-3367
                                </div>
                                <div className="content-two">
                                    Qadim Farhan 1098 Wapello Street Altadena, California 91001 United States
                                </div>
                            </div>
                        </div>
                        <div className="aem-Grid aem-Grid--8 field-details">
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6'>
                                <h6 className="info-text">Shipping Method</h6>
                            </div>
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--2 field-edit'>
                                <Icon name="Edit-2"></Icon>
                                <h6 className="text-edit mobileHide">Edit</h6>
                            </div>
                            <div className="aem-Grid aem-Grid--4 aem-GridColumn--phone--4">
                                <div className="content-one">
                                    Standard Shipping Est. delivery in 4 - 8 business days FREE
                                </div>
                            </div>
                        </div>
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
                        <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8aem-GridColumn--phone--12  shipping-btn'>
                            <button className="decorationNone cursor-pointercontinue-btn payment-btn" onClick={reviewToOrder}>continue to review order </button>
                        </div>
                        <div className="aem-GridColumn--phone--12 btn-section">
                            <button className="decorationNone cursor-pointer mobile-continue-btn deskTopHide" onClick={reviewToOrder}>continue</button>
                        </div>
                    </div>

                }
                {
                    isReview && <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 shipping-section '>
                        <h2 className="guest-check">Guest Checkout</h2>
                        <div className="aem-Grid aem-Grid--8 field-details">
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6'>
                                <h6 className="info-text">Shipping Information</h6>
                            </div>
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--2 field-edit'>
                                <Icon name="Edit-2"></Icon>
                                <h6 className="text-edit mobileHide">Edit</h6>
                            </div>

                            <div className="aem-Grid aem-Grid--4 aem-GridColumn--phone--4 content-section">
                                <div className="content-one">
                                    q_farhan@gmail.com +1 (555) 229-3367
                                </div>
                                <div className="content-two">
                                    Qadim Farhan 1098 Wapello Street Altadena, California 91001 United States
                                </div>
                            </div>
                        </div>
                        <div className="aem-Grid aem-Grid--8 field-details">
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6'>
                                <h6 className="info-text">Shipping Information</h6>
                            </div>
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--2 field-edit'>
                                <Icon name="Edit-2"></Icon>
                                <h6 className="text-edit mobileHide">Edit</h6>
                            </div>

                            <div className="aem-Grid aem-Grid--4 aem-GridColumn--phone--4 content-section">
                                <div className="content-one">
                                    Standard Shipping Est. delivery in 4 - 8 business days FREE
                                </div>
                            </div>
                        </div>
                        <div className="aem-Grid aem-Grid--8 field-details">
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6'>
                                <h6 className="info-text">Shipping Information</h6>
                            </div>
                            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--2 field-edit'>
                                <Icon name="Edit-2"></Icon>
                                <h6 className="text-edit mobileHide">Edit</h6>
                            </div>

                            <div className="aem-Grid aem-Grid--4 aem-GridColumn--phone--4 content-section">
                                <div className="content-one">
                                    Credit Card Visa ending in 4567
                                </div>
                            </div>
                        </div>
                    </div>

                }

                {
                    checkout && <div className="aem-Grid aem-GridColumn aem-GridColumn--default--4 sign-Section mobileHide">
                        <div className="aem-Grid aem-Grid--4 aem-GridColumn--phone--12 ">
                            <div className="aem-GridColumn aem-GridColumn--default--2 signin-text">
                                Sign in for Express Checkout
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--2">
                                <button className="sign-in">Sign in</button>
                            </div>
                        </div>
                    </div>
                }

                <div className="aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 pricingSection">
                    <PricingSummery totalPrice={totalPrice} isHide={false}> </PricingSummery>
                </div>
            </div>

        </form >
    )
}


const mapStateToProps = (state) => {
    return {
        carts: state.feature.carts,
        isLoading: state.feature.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCarts: (payload) => dispatch(getCarts(payload)),
        showLoader: (payload) => dispatch(showLoader(payload)),
        hideLoader: (payload) => dispatch(hideLoader(payload)),
        addProductToCart: (payload) => dispatch(addProductToCart(payload)),
        replaceCart: (payload) => dispatch(replaceCart(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Guestcheckout);