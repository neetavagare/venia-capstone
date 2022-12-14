import React from "react";
import signature from '../../../images/Product_Images/signature.png';
import chuko from '../../../images/Product_Images/chuko.png';
import women from '../../../images/Product_Images/women.png';
import mens from '../../../images/Product_Images/mens.png';
import electronics from '../../../images/Product_Images/electronics.png';
import jewellery from '../../../images/Product_Images/jewellery.png';
import Boykurti from '../../../images/Product_Images/Boykurti.png';
import advanture from '../../../images/Product_Images/advanture.PNG';
import { Image, ProductGallery } from "../../atoms";
import mapLocation from '../../../images/svgIcons/map-pin.svg';
import { useNavigate } from 'react-router-dom'
import UseWindowSize from "../../atoms/UseWindowSize/UseWindowSize";
import Helper from "../../../helper/Helper";

export default function HomePage() {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/category", { replace: true });
        console.log("Disable cache")
    }
    const [width] = UseWindowSize();

    const isMobile = width < 769;

    Helper.addSelectedElement();

    const renderItemFunction = (item) => {
        var deskTopText =
            <div className="aem-Grid aem-Grid--12  home-slider">
                <div className="aem-Grid aem-Grid--12 aem-GridColumn--tablet--12">
                    <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 mobile-hide home-banner'>
                        <h1 className="signature">Shop the new Signature Collection</h1>
                        <div className="signaturepara">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim consectetur.
                        </div>
                        <div>
                            <button className="shopnowbtn cursor-pointer" onClick={handleClick}>shop now</button>
                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 mobile-hide'>
                        <Image alt={""} url={signature} classValue="signature-img"></Image>
                    </div>
                </div>
            </div>

        let mobileText = <div className="mobile-image-galary">
            <div className="aem-GridColumn  aem-GridColumn--phone--12 mobile-gradient">


                {/* <div className=""> */}
                <Image alt={""} url={chuko} classValue="background-img"></Image>

                <div className="transbox-para">
                    <h3 className="sub-title-transbox">
                        Shop the new Signature Collection
                    </h3>
                    <div className="transbox-loream">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </div>
                    <div className="transbox-btn">
                        <button className="shopnow-transbox-btn cursor-pointer" onClick={handleClick}>shop now</button>
                    </div>
                </div>

                {/* </div> */}
            </div>
        </div>

        if (isMobile) {
            return mobileText;
        }

        return deskTopText;

    };

    const images = [
        {
            renderItem: renderItemFunction
        },
        {
            renderItem: renderItemFunction
        },
        {
            renderItem: renderItemFunction
        },
    ];

    return (
        <section>
            <div className="home-page-slider-container">
                <ProductGallery showFullscreenButton={false} images={images} />
            </div>

            <section className="home-product-container">
                <div className='aem-Grid aem-Grid--12 home-container'>
                    <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 mask-grp-one'>
                        <div className="catagory-products">
                            <Image alt={""} url={women} classValue="womenimg"></Image>
                        </div>
                        <div className="title-block1">
                            <h4 className="shop-women">Shop Women</h4>
                            <div className="loream-text1">Lorem ipsum dolor sit amet</div>
                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 mask-grp-one'>
                        <div className="catagory-products">
                            <Image alt={""} url={mens} classValue="mensimg"></Image>
                        </div>
                        <div className="title-block2">
                            <h4 className="shop-men">Shop Men</h4>
                            <div className="loream-text2">Lorem ipsum dolor sit amet</div>
                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 mask-grp-one'>
                        <div className="catagory-products">
                            <Image alt={""} url={jewellery} classValue="jewelleryimg"></Image>
                        </div>
                        <div className="title-block3">
                            <h4 className="shop-jewellery">Shop Jewellery</h4>
                            <div className="loream-text3">Lorem ipsum dolor sit amet</div>
                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 mask-grp-one'>
                        <div className="catagory-products">
                            <Image alt={""} url={electronics} classValue="electronicsimg"></Image>
                        </div>
                        <div className="title-block4">
                            <h4 className="shop-electronics">Shop Electronics</h4>
                            <div className="loream-text4">Lorem ipsum dolor sit amet</div>
                        </div>
                    </div>
                </div>
                <div className='aem-Grid aem-Grid--12 take-of-section'>
                    <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12 takeoff-text'>
                        <h4 className="sign-leggings">
                            Take off in the new Signature Legging
                        </h4>
                        <h6 className="sub-para">Lorem Ipsum Dolor Tempor</h6>
                        <div className="subtext">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum
                        </div>
                        <div className="shop-buttons cursor-pointer">
                            <button className="shopcollection cursor-pointer" onClick={handleClick}>shop collection</button>
                            <button className="shopnowbtn cursor-pointer" onClick={handleClick}>shop now</button>
                        </div>
                        <div className="fat-line"></div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12'>
                        <Image alt={""} url={Boykurti} classValue="boykurti"></Image>
                    </div>
                </div>
            </section>
            <div className="adds-container">
                <section className="aem-Grid aem-Grid--12 adventure-container">
                    <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 adventure-img">
                        <img src={advanture} alt="herobanner" />
                        <div className="location-icon-container">
                            <img src={mapLocation} alt="location" />
                            <div className="loc-border"></div>
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 adventure-content">
                        <div className="adventure-sub-content">
                            <h2>Conquer your <span className="hide">next adventure</span></h2>
                            <p>Lorem Ipsum Dolor Tempor</p>
                            <button className="shop-device-btn cursor-pointer" onClick={handleClick}>
                                shop devices
                            </button>
                        </div>
                    </div>

                </section>
            </div>
        </section>
    )
}