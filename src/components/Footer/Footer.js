import React from "react";
import DesktopBanner from '../../images/Product_Images/DesktopBanner.png';
import { Image, Label } from "../atoms";
import { Anchor } from '../atoms';
import veniaLogo from '../../images/Product_Images/venia2.png'
export default function Footer() {
  return (
    // <div className="container">
    <footer className="footerrow container">

      <div className="aem-Grid aem-Grid--12 footer-bottom">
        <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
          <Anchor  tabindex="">
            {/* <Label name="venia" className="footervenia"></Label> */}
            <Image url={veniaLogo} classValue={"footervenia"}></Image>
          </Anchor>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 copyright" >
          <span className="footerColor">© Company Name Address Ave, City Name, State ZIP</span>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 left-nav align_center">
          <ul>
            <li>
              <Anchor tabindex="" href="">Terms of Use</Anchor>
            </li>
            <li>
              <Anchor tabindex="" href=" ">Privacy Policy</Anchor>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    // </div>
  )
}

