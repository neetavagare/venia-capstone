import React from "react";
import { connect } from "react-redux";
import { getCarts, hideLoader, showLoader, addProductToCart, replaceCart } from "../../../redux/actions/index.js";
import { useState } from "react";
import Loader from "../../atoms/Loader/Loader";
import PricingSummery from '../ShopingCart/PricingSummery';
import Banner from '../ShopingCart/Banner';

import LocalService from "../../../services/LocalService/LocalService";
import OrderReview from './OrderReview';
import PaymentSelection from './PaymentSelection';
import ShppingSection from "./ShppingSection.js";
import CheckoutInfo from "./CheckoutInfo.js";
import { useNavigate } from 'react-router-dom'

function Guestcheckout(props) {

    let navigate = useNavigate();
    let [isPayment, setIsPayment] = useState(false)
    let [isShipping, setIsShipping] = useState(false)
    let [checkout, setCheckout] = useState(true)
    let [isReview, setIsReview] = useState(false)
    let [items, setItems] = useState([])

    useState(async () => {
        let cartItems = LocalService.getCart();
        setItems(cartItems);

    }, []);

    const handleClick = () => {
        navigate("/order-success", { replace: true });
        console.log("Disable cache")
    }
    

    let totalPrice = 0;

    props.carts.forEach(element => {
        let pricing = element.price * element.count
        totalPrice += pricing;
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

    const handleShippingClick = (type) =>{
        let currentType = type.currentTarget.getAttribute('data-type')

        if(currentType === "shipping-info"){
            setCheckout(true)
            setIsShipping(false);
            setIsPayment(false);
            setIsReview(false);
        }else if(currentType === "shipping-method"){
            setCheckout(false)
            setIsShipping(true);
            setIsPayment(false);
            setIsReview(false);
        }
        else if(currentType === "payment-method"){
            setCheckout(false)
            setIsShipping(false);
            setIsPayment(true);
            setIsReview(false);
        }

        return false;
    }

    let pricingName = (isShipping || isPayment || isReview) ? true : false;
    let classNames = pricingName ? "aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 pricing-section checkout-pricing-spacing" : 
    "aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 pricing-section"
 
    return (
        <form className="page-container" onsubmit="return false">
            <Loader isLoading={props.isLoading}></Loader>
            <Banner text="Checkout" />
            <div className='aem-Grid aem-Grid--12'>
                {
                    checkout &&
                    <CheckoutInfo shippingToMethod={shippingToMethod} ></CheckoutInfo>
                }

                {
                    isShipping &&
                    <ShppingSection handleShippingClick={handleShippingClick} paymentToMethod={paymentToMethod}></ShppingSection>
                }
                {
                    isPayment &&
                    <PaymentSelection handleShippingClick={handleShippingClick} reviewToOrder={reviewToOrder}></PaymentSelection>
                }
                {
                    isReview &&
                    <OrderReview handleShippingClick={handleShippingClick} cartItems={items} handleClick={handleClick}></OrderReview>
                }
                {
                    checkout && <div className="aem-Grid aem-GridColumn aem-GridColumn--default--4 sign-Section mobile-hide">
                        <div className="aem-Grid aem-Grid--4 aem-GridColumn--phone--12 ">
                            <div className="aem-GridColumn aem-GridColumn--default--2 signin-text">
                                Sign in for Express Checkout
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--2">
                                <button className="sign-in cursor-pointer" onClick={(event)=>{ event.preventDefault();}}>Sign in</button>
                            </div>
                        </div>
                    </div>
                }

                <div className={classNames}>
                    <PricingSummery totalPrice={totalPrice} isHide={false} isCheckout={pricingName}> </PricingSummery>
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