import { CategoriesFilter } from "../../../config/Constant";
import CheckBox from "../CheckBox/CheckBox";
import React from "react";

const SideBar = (props) => {

    return (<>
        <div className="side-bar-overlay"></div>
        <aside className="side-bar productFilters">
            <nav>
                <ul>
                    <li className="filters">Filters</li>
                    <li onClick={props.closeSideBar}>
                        X
                    </li>
                </ul>
            </nav>
            <div className="clear-all">
                <a className="clear-all-text">Clear all</a>
            </div>
            <div className="filter-container">

                <div className="border-none productFilters">
                    <h6 className="sidebar-catagory">Categories</h6>
                    {
                        CategoriesFilter.map((item, index) => {
                            return <React.Fragment key={"ch" + index}>
                                <div>
                                    <CheckBox type="checkbox" text={item.text} value={item.value} />
                                </div>

                            </React.Fragment>
                        })
                    }
                </div>
            </div>
            <div className="button-action">
                <button className="results-17" onClick={props.handleClick} > Filter</button>
            </div>
        </aside>
    </>)
}
export default SideBar;

