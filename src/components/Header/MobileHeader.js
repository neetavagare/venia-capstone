import React from "react";
import Icon from "../atoms/Icon/Icon";
import mobilevenia from '../../images/Product_Images/mobilevenia.png'
import { Link } from 'react-router-dom';
import { Image} from "../atoms";
import { Anchor } from '../atoms';
import { connect } from "react-redux";

// Mobile Banner Row.
function MobileHeader(props) {

    return (
        <header className='aem-Grid aem-Grid--4  aem-GridColumn--tablet--12 desktop-hide mobileheader'>
                <div className="aem-GridColumn aem-GridColumn--phone--1 menu">
                    <Anchor><Icon name="menu" className="menu"> </Icon></Anchor>
                </div>
                <div className="aem-GridColumn aem-GridColumn--phone--2 align-center">
                    <Link to={"/"} className="mobilevenia"><Image url={mobilevenia} classValue={"logo"}></Image></Link>
                </div>
                <div className="aem-GridColumn aem-GridColumn--phone--1 mobileIcon align-center">
                    <Link to={"/cart"} className="shopbagicon"><Anchor><Icon name="ShopBag"> </Icon></Anchor> <span className='cart-count'> {props.carts.length}</span>  </Link>

                </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.feature.carts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // addProductToCart: (payload) => dispatch(addProductToCart(payload)),
        // replaceCart: (payload) => dispatch(replaceCart(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileHeader);
