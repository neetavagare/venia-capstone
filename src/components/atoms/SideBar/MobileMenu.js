import { HeaderLabels } from "../../../config/Constant";
import React from "react";
import Anchor from "../Anchor/Anchor";
import Icon from "../Icon/Icon";

const MobileMenu = (props) => {

    return (<>
        <aside className="mobile-menu prouctFilters">
            <nav>
                <ul>
                    <li className="filters">Shop Categories</li>
                    <li onClick={props.closeSideBar}>
                        <Anchor><Icon name="cross_Icon"></Icon></Anchor>
                    </li>
                </ul>
            </nav>
            <div className="menu-container">
                {
                    HeaderLabels.manuItems.map((item, index) => {
                        return <React.Fragment key={"ch" + index}>
                            <div className="navigation-link">
                                <a  className="cursor-pointer" onClick={props.navigate} data-url={item.url}> {item.label}</a>
                            </div>

                        </React.Fragment>
                    })
                }
            </div>

            <div class="menu-footer">
                <div className="left-div">Account</div>
                <div className="right-div"> <a className="text-underline"> SignIn</a> </div>
            </div>
        </aside>
    </>)
}
export default MobileMenu;

