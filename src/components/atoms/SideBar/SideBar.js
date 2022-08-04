import { CategoriesFilter } from "../../../config/Constant";
import CheckBox from "../CheckBox/CheckBox";
import React from "react";
import Button from "../Button/Button";


const SideBar = (props) => {

    return (<>
        <aside className="side-bar productFilters">
            <nav>
                <ul>
                    <li className="filters">Filters</li>
                    <li onClick={props.closeSideBar}>
                        {/* <img src={closeIcon} alt="close_icon" /> */}
                        X
                    </li>
                </ul>


            </nav>
            <div className="clear-all">
                <a href="">Clear all</a>
            </div>
            <div className="filter-container">

                <div className="border_none">
                    <h6 className="sidebar-catagory">Categories</h6>
                    {
                        CategoriesFilter.map((item, index) => {
                            return <React.Fragment key={"ch" + index}>
                                <div>
                                    <CheckBox type="checkbox" text={item.text} value={item.text} />
                                </div>

                            </React.Fragment>
                        })
                    }
                </div>
            </div>
            <div className="button-action">
                <Button classValue="results-17"> See 17 Results</Button>
            </div>
        </aside>
    </>)
}
export default SideBar;

