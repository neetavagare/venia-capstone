import React from 'react';
import { DropDownOption, StateOption } from '../../../config/Constant';
import InputBox from "../../atoms/InputBox/InputBox";
import DropDownWithLabel from "../../atoms/DropDown/DropDownWithLabel";

export default function CheckoutInfo(props) {
    return (
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
                        <InputBox label="Last Name" type={"text"} name={'lname'} classValue={'email'} />
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
                                <InputBox label="ZIP" labelClass="label-zip" type={'text'} name={"zip"} placeholder={'10001'} classValue={'zip'} />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="next-page aem-GridColumn--phone--12 ">
                    <button className="decoration-none cursor-pointer continue-btn mobile-hide" onClick={props.shippingToMethod}>continue to shipping method</button>
                </div>
                <div className="aem-GridColumn--phone--12 btn-section">
                    <button className="decoration-none cursor-pointer mobile-continue-btn desktop-hide" onClick={props.shippingToMethod}>continue</button>
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
    )
}