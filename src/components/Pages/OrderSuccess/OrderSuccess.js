import React, { useEffect } from "react";
import { AnchorV2, Icon } from "../../atoms";
import OrderItem from "../Checkout/OrderItem";
import { useState } from "react";
import LocalService from "../../../services/LocalService/LocalService";
import Helper from "../../../helper/Helper";

export default function OrderSuccess(props) {

    let [items, setItems] = useState([])

    useEffect( () => {
        let cartItems = LocalService.getCart();
        setItems(cartItems);
        Helper.addSelectedElement();
        Helper.showToastMessage("Your order has been successfully placed ! Thank you :)")
        
    }, []);
    


    return (
        <section className="page-container order-succes-section">
            <div className='aem-Grid aem-Grid--12 aem-GridColumn--phone--12'>
                <div className="order-banner">
                    <h2 className="order-succes-text">
                        Order Successful!
                    </h2>
                    <div className="dotborder"></div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--8 order-field aem-GridColumn--phone--12">
                <div className="order-number">Order Number #1700834</div>
                    <div className='aem-Grid aem-Grid--8 order-page-content'>
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--8">
                            <h6 className="info-text">Shipping Information</h6>
                            <div className="content-one">
                                q_farhan@gmail.com
                                <p> +1 (555) 229-3367</p>
                                Qadim Farhan 1098 Wapello Street Altadena, California 91001 United States
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--8">
                            <h6 className="info-text">Shipping Method</h6>
                            <div className="content-one">
                                Standard Shipping Est. delivery in 4 - 8 business days FREE
                            </div>
                            <h6 className="payemnt-text">Payment Information</h6>
                            <div className="content-one">
                                Credit Card Visa ending in 4567
                            </div>
                        </div>
                    </div>
                    
                    <OrderItem cartItems={items}></OrderItem>
                </div>
              
                <div className="aem-GridColumn aem-GridColumn--default--4 mobile-hide add-cart">
                    <div className="add-cart-text">
                        Give us a follow 
                        <p className="add-cart-two">to SAVE 20% on your next.</p>
                    </div>
                    <div className="add-cart-icon">
                        <AnchorV2><Icon name="insta-icon"></Icon></AnchorV2>
                        <AnchorV2><Icon name="facebook-icon"> </Icon></AnchorV2>
                        <AnchorV2><Icon name="twitter-icon"> </Icon></AnchorV2>
                    </div>
                </div>
            </div>
            <div className='aem-Grid aem-Grid--12'>
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                    <div className="page-content">
                        <div className="page-content-one">
                            You will also receive an email with the details and we will let you know when your order has shipped.
                        </div>
                        <div className="page-content-two">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}