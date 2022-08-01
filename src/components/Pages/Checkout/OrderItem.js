import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Paragraph } from '../../atoms';


export default function OrderItem(props) {
    return (
        
        <div className='aem-Grid aem-Grid--8 field-details order-item-container'>
            <div className='total-order-items'>
                {props.cartItems.length} Items in your order.  
            </div>
            {
                props.cartItems && props.cartItems.map((item) => {
                    let title = item.title?.substring(0,15)
                    return <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--default--4 aem-GridColumn--phone--8">
                        <div className='aem-Grid aem-Grid--4'>
                        <div className='aem-GridColumn aem-GridColumn--default--2 cart-container'>
                            <Image alt={item.title} url={item.image} classValue="image"></Image>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--2 details'>
                            <Link to={"/product/" + item.id} className="title-link"> <Paragraph name={title} classValue={'title-product'}></Paragraph>  </Link>
                            {/* <p className="title">  {title}</p> */}
                            <div className="size-product"> Size : {item.size}</div>
                            <div className="color-product"> Color : {item.color}</div>
                            <div className="price-product"> Quantity : {item.count}</div>
                        </div>
                        </div>
                        
                    </div>
            

                })
            }
        </div>
    )
}