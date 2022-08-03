import React from "react";
import { CART_CHANGE_MESSAGE, CART_EMPTY_MESSAGE, LAST_CHANGE_MESSAGE, REMOVED_PRODUCT_FROM_BAG_MESSAGE } from "../../../config/Constant";
import Icon from '../../atoms/Icon/Icon';
import Banner from "./Banner";
import Estimaterow from './Estimaterow';
import { connect } from "react-redux";
import { getCarts, hideLoader, showLoader, addProductToCart, replaceCart } from "../../../redux/actions/index.js";
import { useState } from "react";
import Loader from "../../atoms/Loader/Loader";
import LocalService from "../../../services/LocalService/LocalService";
import PricingSummery from './PricingSummery';
import Helper from "../../../helper/Helper";
import { Anchor, Button, Image, Paragraph } from "../../atoms";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function ShopingCart(props) {

    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/category", { replace: true });
        console.log("Disable cache")
    }

    useState(async () => {
        props.showLoader();
        props.getCarts();
        Helper.addSelectedElement();
        props.hideLoader();
    }, []);

    let totalPrice = 0;

    props.carts.forEach(element => {
        let pricing = element.price * element.count
        totalPrice += pricing;
    });

    totalPrice = Math.round(totalPrice)

    const removeProduct = (item) => {
        LocalService.removeProductCart(item);

        let cartItems = LocalService.getCart();
        props.replaceCart(cartItems);
        Helper.showToastMessage(REMOVED_PRODUCT_FROM_BAG_MESSAGE, true);
    }

    const updateCart = (isError) => {
        let cartItems = LocalService.getCart();
        props.replaceCart(cartItems);
        Helper.showToastMessage(CART_CHANGE_MESSAGE, isError);
    }

    const decrementCount = (item) => {
        if (item.count === 1) {
            Helper.showToastMessage(LAST_CHANGE_MESSAGE, true);
            return;
        }

        LocalService.decrementCount(item);
        updateCart(true);
    }

    const incrementCount = (item) => {
        LocalService.incrementCount(item);
        updateCart(false);
    }

    return (
        <section className="page-container">
            <Loader isLoading={props.isLoading}></Loader>
            <Banner text={"Your Shopping Bag"} />

            {/* Cart Page If we add item It will shown on cart page. */}
            {
                props.carts.length === 0 ?
                    <div className='aem-Grid aem-Grid--12 empty-container'>
                        <div className='aem-Grid aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12' >
                            <div className='aem-Grid aem-GridColumn--default--12'>
                                <h1 className="cart-empty-message"> {CART_EMPTY_MESSAGE}</h1>
                                <h3> Add items to it now. </h3>
                                <div className="cart-shop-now-container">
                                    <button className=" cursor-pointer cart-shop-now" onClick={handleClick}>
                                        Shop Now
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    :
                    <div className='aem-Grid aem-Grid--12'>
                        <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12' >

                            {props.carts.map((item) => {
                                let title = item.title?.split(' ')[0]
                                return <div className='aem-Grid aem-GridColumn--default--8' >
                                    <div className='aem-Grid aem-Grid--phone--4 cart-container aem-Grid--12'>
                                        <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--11' >
                                            <div className="aem-Grid aem-Grid--4">
                                                <div className='aem-GridColumn aem-GridColumn--default--2 img_box'>
                                                    <Image alt={item.title} url={item.image} classValue="image"></Image>
                                                </div>
                                                <div className='aem-GridColumn aem-GridColumn--default--2 details'>
                                                    <Link to={"/product/" + item.id} className="title-link"> <Paragraph name={title} classValue={'title'}></Paragraph>  </Link>
                                                    {/* <p className="title">  {title}</p> */}
                                                    <div className="size"> Size : {item.size}</div>
                                                    <div className="color"> Color : {item.color}</div>
                                                    <div className="price">${item.price}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="aem-GridColumn aem-GridColumn--phone--1 desktop-hide">
                                            <Icon name="more_horizantal" classValue="dot-mobile"></Icon>
                                        </div>

                                        <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--11'>
                                            <div className='aem-GridColumn aem-GridColumn--default--2 cart_button button'>

                                                <Anchor onChange={() => decrementCount(item)}> <Icon name="minus" > </Icon> </Anchor>
                                                <Button classValue="btn1">{item.count}</Button>
                                                <Anchor onChange={() => incrementCount(item)}> <Icon name="plus" > </Icon> </Anchor>
                                            </div>
                                        </div>
                                        <div className='aem-GridColumn aem-GridColumn--default--4 trashIcon mobile-hide'>
                                            <div className="button-spacer">
                                                <Icon name="Edit2"> </Icon>
                                                <span className="trash">Edit item</span>
                                            </div>
                                            <div className="button-spacer">
                                                <Anchor classValue="remove-btn" onChange={() => removeProduct(item)}>
                                                    <Icon name="trash2"> </Icon>
                                                    <span className="trash">Remove</span>
                                                </Anchor>
                                            </div>
                                            <div className="button-spacer">
                                                <Icon name="hurt"> </Icon>
                                                <span className="trash">Save for later</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                            }

                            {/* Estimating row tabel component */}


                            <Estimaterow></Estimaterow>

                        </div>

                        {/* Pricing summery tabel Component */}

                        <div className="aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 pricing-section">
                            <PricingSummery totalPrice={totalPrice} isHide={true}> </PricingSummery>
                        </div>
                    </div>
            }




            {/* Recent view Carousel Component */}

            {/* <RecentView></RecentView> */}


        </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopingCart);