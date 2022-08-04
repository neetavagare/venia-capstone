import React from "react";
import Icon from "../../atoms/Icon/Icon";
import ppbtn from '../../../images/Product_Images/ppbtn.png';
import { Button, Image } from '../../atoms';
import { Link } from 'react-router-dom';


// Pricing Summery Component and it's working.


export default function PricingSummery(props) {
    let isCart = props.isHide ? props.isHide : false;
    let isCheckout = props.isCheckout ? props.isCheckout : false;

    return (
        <React.Fragment>
            <div className="aem-Grid aem-Grid--12 ">
                <h2 className="pricingtext">Pricing Summery</h2>
                <div className="aem-GridColumn aem-GridColumn--default--6">
                    <div className="subtotal">Subtotal</div>
                    <div className="coupen">Coupen</div>
                    <div className="gift">Gift Card</div>
                    <div className="tax">
                        {
                            isCheckout === true ?
                                "Tax" : "Estimated tax"
                        }
                    </div>
                    <div className="shhipping">
                        {
                            isCheckout === true ?
                                "shipping" : "Estimated shipping"
                        }
                    </div>
                    <div className="total ">
                        {
                            isCheckout === true ?
                                "Total" : "Estimated Total"
                        }
                    </div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 pricing ">
                    <div className="subtotal">${props.totalPrice ? (props.totalPrice) : 0}</div>
                    <div className="coupen">0</div>
                    <div className="gift">${props.totalPrice ? 5 : 0}</div>
                    <div className="tax">0</div>
                    <div className="shhipping">FREE</div>
                    <div className="total">${props.totalPrice ? (props.totalPrice - 5) : 0}</div>
                </div>
            </div>
            {
                isCart &&
                <React.Fragment>
                    <div className="aem-Grid aem-Grid--12 textAlignCenter">
                        <Link className="decoration-none cursor-pointer" to={"/checkout"} ><Button classValue="checkoutbtn">
                            <span> <Icon name="lock"> </Icon>  checkout</span>
                        </Button>
                        </Link>
                    </div>
                    <div className="aem-Grid aem-Grid--12 textAlignCenter cursor-pointer" >
                        <Button classValue="paypal-exp">
                            <Image alt={'Payplay'} url={ppbtn} classValue="paypalbtn"></Image>
                        </Button>

                    </div>
                </React.Fragment>
            }

        </React.Fragment>
    )
}