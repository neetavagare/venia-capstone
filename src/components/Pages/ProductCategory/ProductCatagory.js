import React, { useState } from "react";
import ProductListing from './ProductListing';
import { ProductService } from "../../../services/ProductService";
import { connect } from "react-redux";
import { getCategoryProducts, hideLoader, showLoader, sortProduct } from "../../../redux/actions";
import Loader from "../../atoms/Loader/Loader";
import Pagination from "./Pegination";
import Helper from "../../../helper/Helper";
import Beans from '../../../images/Product_Images/Beans.png';
import boys from '../../../images/Product_Images/boys.png';
import { Image } from "../../atoms";


function ProductCatagory(props) {

  let pageSize = 5;
  let [showPagination, SetShowPagination] = useState(true);

  useState(async () => {
    props.showLoader()
    var products = await ProductService.getCategory().catch((e) => {
      props.hideLoader();
      Helper.showToastMessage("Something went wrong. Please try again")
    });

    /* Data manipulation*/
    var filteredElements = [];

    products.forEach(item => {
      item.image = item.image.replace('https://fakestoreapi.com/', 'https://neetavagare.github.io/')
      if (item.category === "women's clothing") {
        filteredElements.unshift(item);
      } else {
        filteredElements.push(item);
      }
    });

    props.getCategoryProducts(filteredElements)
    props.sortProduct(filteredElements?.slice(0, pageSize) ?? [])
    props.hideLoader()
  }, [])


  const sortByCategory = (item) => {
    let filterData = [...props.products];//props.products.filter(d => d.category == item.currentTarget.value);
    if (item.currentTarget.value === "1") {
      filterData = filterData.sort((a, b) => (a.price > b.price ? 1 : -1))
    } else if (item.currentTarget.value === "0") {
      filterData = filterData.sort((a, b) => (a.price > b.price ? -1 : 1))
    } else {
      filterData = props.products.filter(d => d.category === item.currentTarget.value);
    }
    props.sortProduct(filterData);

  }

  const searchByCategory = (item) => {
    let filterData = [...props.products];
    // let currentValue = item.currentTarget.value;
    // if (currentValue) {
    //   currentValue = currentValue.toLowerCase();
    // }

    var elements = document.querySelectorAll(".productFilters input[type='checkbox']:checked");

    if (elements && elements.length > 0) {
      var filteredValues = [];
      elements.forEach((item) => {
        let value = (item.currentTarget && item.currentTarget.value) || item.value
        let values = props.products.filter(d => d.category === value);
        if (values.length > 0) {
          filteredValues = filteredValues.concat(values);
        }
      });
      props.sortProduct(filteredValues);

    } else {
      props.sortProduct(filterData);
    }

    SetShowPagination(true);
  }


  let totalItem = (props.products?.length / pageSize) ?? 0
  totalItem = Math.floor(totalItem)

  const paginate = (e, item) => {
    for (let index = 0; index < e.currentTarget.parentElement.children.length; index++) {
      const element = e.currentTarget.parentElement.children[index];
      element.classList.remove('selectedColor')
    }

    e.currentTarget.classList.add('selectedColor')
    let filterData = props.products.slice((item - 1) * pageSize, item * pageSize);
    props.sortProduct(filterData);
    window.scrollTo({
      top: 400,
      behavior: 'smooth',
    })
  }



  let data = props.sortedProducts.length > 0 ? props.sortedProducts : props.products


  return <React.Fragment>
    <div className="aem-Grid aem-Grid--12">
      <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--4 boximg">
        <div className="deskTopHide">
          <div>
            <Image alt={""} url={Beans} classValue="mobileimg"></Image>
          </div>
          <div className="blackbox">
            <div>Mens's Outerwear</div>
            <div className="categoryBorder">
            </div>
          </div>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 mobileHide black-image-div">
          <div className="colorbox">
            <div>Mens's Outerwear</div>
            <div className="categoryBorder"></div>
          </div>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 mobileHide">
          <Image alt={""} url={boys} classValue="Bannerimg"></Image>
        </div>
      </div>
    </div>
    <div className="page-container category-container">
      <Loader isLoading={props.isLoading}></Loader>
      <ProductListing data={data} sortByCategory={sortByCategory} handleClick={searchByCategory}></ProductListing>
      {
        showPagination &&
        <Pagination totalItem={totalItem} paginate={paginate}></Pagination>

      }
    </div>
  </React.Fragment>
}

const mapStateToProps = (state) => {
  return {
    products: state.feature.products,
    isLoading: state.feature.isLoading,
    sortedProducts: state.feature.sortedProducts

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoryProducts: (payload) => dispatch(getCategoryProducts(payload)),
    showLoader: (payload) => dispatch(showLoader(payload)),
    hideLoader: (payload) => dispatch(hideLoader(payload)),
    sortProduct: (payload) => dispatch(sortProduct(payload))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCatagory);