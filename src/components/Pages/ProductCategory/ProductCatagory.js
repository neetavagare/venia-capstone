import React, { useEffect, useState } from "react";
import ProductListing from './ProductListing';
import { ProductService } from "../../../services/ProductService";
import { connect } from "react-redux";
import { getCategoryProducts, hideLoader, showLoader, sortProduct, setCategories } from "../../../redux/actions";
import Loader from "../../atoms/Loader/Loader";
import Pagination from "./Pegination";
import Helper from "../../../helper/Helper";
import Beans from '../../../images/Product_Images/Beans.png';
import boys from '../../../images/Product_Images/boys.png';
import { Image } from "../../atoms";
import CategoryService from "../../../services/CategoryService/CategoryService";
import { useParams } from 'react-router-dom';
import SideBar from '../../atoms/SideBar/SideBar';

function ProductCatagory(props) {

  let pageSize = 5;
  let [showPagination, setShowPagination] = useState(true);
  const { category } = useParams();

  let [isVisible, setIsVisible] = useState(false);



  useEffect(() => {

    (async () => {
      props.showLoader()
      Helper.addSelectedElement();
      var results = await Promise.all([
        CategoryService.getCategories(),
        ProductService.getCategory()
      ]).catch((e) => {
        props.hideLoader();
        Helper.showToastMessage("Something went wrong. Please try again")
      });

      if (results.length === 0) {
        return;
      }

      let products = results[1];
      let catagoriesInfo = [];

      results[0].forEach(item => {
        item = item.charAt(0).toUpperCase() + item.slice(1)
        catagoriesInfo.push(item);
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
      props.setCategories(catagoriesInfo);
      props.getCategoryProducts(filteredElements)
      if (category) {
        let values = props.products.filter(d => d.category === category);
        props.sortProduct(values)
      } else {
        props.sortProduct(filteredElements?.slice(0, pageSize) ?? [])
      }
      props.hideLoader()
    })();

  }, [category])

  const sortByCategory = (item) => {
    let filterData = [...props.products];
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
    var elements = document.querySelectorAll(".productFilters input[type='checkbox']:checked");

    if (elements && elements.length > 0) {
      var filteredValues = [];
      elements.forEach((item) => {
        let value = (item.currentTarget && item.currentTarget.value) || item.value
        value = value.toLowerCase();
        let values = props.products.filter(d => d.category === value);
        if (values.length > 0) {
          filteredValues = filteredValues.concat(values);
        }
      });
      props.sortProduct(filteredValues);

    } else {
      props.sortProduct(filterData);
    }

    setShowPagination(true);
    if (isVisible) {
      closeSideBar();
    }

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

  const closeSideBar = () => {
    setIsVisible(!isVisible);
  }

  return <React.Fragment>
    {
      isVisible &&
      <SideBar closeSideBar={closeSideBar} handleClick={searchByCategory}></SideBar>
    }
    <div className="aem-Grid aem-Grid--12">
      <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--4 boximg">
        <div className="desktop-hide">
          <div>
            <Image alt={""} url={Beans} classValue="mobileimg"></Image>
          </div>
          <div className="blackbox">
            <div>Mens's Outerwear</div>
            <div className="categoryBorder">
            </div>
          </div>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 mobile-hide black-image-div">
          <div className="colorbox">
            <div>Mens's Outerwear</div>
            <div className="categoryBorder"></div>
          </div>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12 mobile-hide">
          <Image alt={""} url={boys} classValue="Bannerimg"></Image>
        </div>
      </div>
    </div>
    <div className="page-container category-container">
      <Loader isLoading={props.isLoading}></Loader>
      <ProductListing data={data} filterOption={closeSideBar} sortByCategory={sortByCategory} categories={props.categories} handleClick={searchByCategory}></ProductListing>
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
    sortedProducts: state.feature.sortedProducts,
    categories: state.feature.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoryProducts: (payload) => dispatch(getCategoryProducts(payload)),
    showLoader: (payload) => dispatch(showLoader(payload)),
    hideLoader: (payload) => dispatch(hideLoader(payload)),
    sortProduct: (payload) => dispatch(sortProduct(payload)),
    setCategories: (payload) => dispatch(setCategories(payload))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCatagory);