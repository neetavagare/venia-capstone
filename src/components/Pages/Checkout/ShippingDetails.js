import React from 'react';
import { AnchorV2 } from '../../atoms';
import Icon from '../../atoms/Icon/Icon';

export default function ShippingDetails(props) {
    return (
        <div className="aem-Grid aem-Grid--8 field-details">
            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6'>
                <h6 className="info-text">{props.title}</h6>
            </div>
            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--2 field-edit'>
                <div onClick={props.handleShippingClick} data-type={props.type} className="cursor-pointer">
                    <Icon name="Edit-2" type={props.type}></Icon>
                </div>
                <h6 className="text-edit mobileHide cursor-pointer" onClick={props.handleShippingClick} data-type={props.type}>Edit</h6>
            </div>

            <div className="shipping-info">
                {
                    props.type === "shipping-info" &&
                    <React.Fragment>
                        <div className="content-one">
                            q_farhan@gmail.com
                            <p className='content-one-para'> +1 (555) 229-3367</p>
                        </div>
                        <div className="content-two">
                            Qadim Farhan 1098 Wapello Street Altadena, California 91001 United States
                        </div>
                    </React.Fragment>
                }

                {
                    props.type === "shipping-method" &&
                    <React.Fragment>
                        <div className="content-one">
                            Standard Shipping Est. delivery in 4 - 8 business days FREE
                        </div>
                    </React.Fragment>
                }

                {
                    props.type === "payment-method" &&
                    <React.Fragment>
                        <div className="content-one">
                            Credit Card Visa ending in 4567
                        </div>
                    </React.Fragment>
                }

            </div>
        </div>
    )
}



