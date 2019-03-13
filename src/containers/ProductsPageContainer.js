import React from 'react';
import ProductsPage from "../components/ProductsPage";
import {connect} from "react-redux";
import {actions, getProductsFilteredByNameSubstring} from "../modules/productsPageReducer";

const ProductsPageContainer = (props) => {
    return <ProductsPage {...props}/>
};

const mapStateToProps = (state) => {
    return {
        productsList:      getProductsFilteredByNameSubstring(state, state.productsPage.filterSubstring), //state.productsPage.productsList,
        isDispalyed:       state.productsPage.isDispalyed,
        selectedProductId: state.productsPage.selectedProductId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onShowdDescription: (productId) => {
            dispatch(actions.setSelectedProductId(productId));
            dispatch(actions.getDescriptionProduct())
        },
        onHideDescription: (productId) => {
            dispatch(actions.setSelectedProductId(productId));
            dispatch(actions.hideDescriptionProduct())
        },
        onChangeFilter: (filter) => {
            dispatch(actions.setFilterSubstring(filter))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductsPageContainer);
