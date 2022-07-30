import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Paragraph } from '../../atoms';
import ShippingDetails from './ShippingDetails';


export default function OrderItem(props) {
    return (
        
        <div className='aem-Grid aem-Grid--8 field-details order-item-container'>
            <div className='total-order-items'>
                {props.cartItems.length} Items in your order.  
            </div>
            {
                props.cartItems && props.cartItems.map((item) => {
                    let title = item.title?.substring(0,50)
                    return <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--default--4 aem-GridColumn--phone--8">
                        <div className='aem-Grid aem-Grid--4'>
                        <div className='aem-GridColumn aem-GridColumn--default--2 cart-container'>
                            <Image alt={item.title} url={item.image} classValue="image"></Image>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--2 details'>
                            <Link to={"/product/" + item.id} className="title-link"> <Paragraph name={title} classValue={'title'}></Paragraph>  </Link>
                            {/* <p className="title">  {title}</p> */}
                            <div className="size"> Size : {item.size}</div>
                            <div className="color"> Color : {item.color}</div>
                            <div className="price"> Quantity : {item.count}</div>
                        </div>
                        </div>
                        
                    </div>
            

                })
            }
        </div>
    )
}