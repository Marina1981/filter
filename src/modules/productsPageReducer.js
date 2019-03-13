export const types = {
    GET_DESCRIPTION_PRODUCT:   'TESTS/PRODUCTS_PAGE/GET_DESCRIPTION_PRODUCT',
    HIDE_DESCRIPTION_PRODUCT:  'TESTS/PRODUCTS_PAGE/HIDE_DESCRIPTION_PRODUCT',
    SET_SELECTED_PRODUCT_ID:   'TESTS/PRODUCTS_PAGE/SET_SELECTED_PRODUCT_ID',
    SET_FILTER_SUBSTRING:       'TESTS/PRODUCTS_PAGE/SET_FILTER_SUBSTRING'
};


//----
const initialState = {
    productsList: [
        {
            id: '1',
            name: 'Apple iPhone 7',
            imgURL: 'https://www.e-katalog.ru/jpg_zoom1/916472.jpg',
            price: '1400 p.',
            internalMemory: '32 Г',
            ram: '3G',
            dimensions: '77.9x158.2x7.3',
            displayResolution: '1920x1080'
        },
        {
            id: '2',
            name: 'Xiaomi Mi5x',
            imgURL: 'https://megabite.ua/pix/img/products/45901/1/big.jpg',
            price: '530 p.',
            internalMemory: '30 Г',
            ram: '2G',
            dimensions: '77.9x158.2x7.3',
            displayResolution: '1440x1030'
        },
        {
            id: '3',
            name: 'Samsung Galaxy J1 ',
            imgURL: 'https://video-shoper.ru/upload/iblock/bad/badbc7e786c82b84854c85916e9816bb.jpg',
            price: '430 p.',
            internalMemory: '20 Г',
            ram: '5G',
            dimensions: '77.9x158.2x7.3',
            displayResolution: '1520x1050'
        }
    ],
    isDispalyed: false,
    selectedProductId: null,
    filterSubstring: null
};

//---- actionCreators--------//
export const actions = {
    getDescriptionProduct:   ()        => ({type: types.GET_DESCRIPTION_PRODUCT}),
    hideDescriptionProduct:  ()        => ({type: types.HIDE_DESCRIPTION_PRODUCT}),
    setSelectedProductId:   (id)       => ({type: types.SET_SELECTED_PRODUCT_ID, id}),
    setFilterSubstring:    (substring)   => ({type: types.SET_FILTER_SUBSTRING, substring})
};

//----
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_DESCRIPTION_PRODUCT:
            return {
                ...state,
                isDispalyed: true
            };

        case types.HIDE_DESCRIPTION_PRODUCT:
            return {
                ...state,
                isDispalyed: false
            };

        case types.SET_SELECTED_PRODUCT_ID:
            return {
                ...state,
                selectedProductId: action.id
            };

        case types.SET_FILTER_SUBSTRING:
            return {
                ...state,
                filterSubstring: action.substring
            };

        default:
            return state;
    }
};
//---- Selector -----------//

export const getProductsFilteredByNameSubstring = (globalState, substring) => {
    // let filter = globalState.productsPage.filterSubstring;

    let filteredData = globalState.productsPage.productsList;

    if(substring !== null){
        filteredData = globalState.
                            productsPage.
                                    productsList.filter((item) => {
                                        return item.name.toLowerCase().indexOf(substring) >= 0;
                                    });
    };

    return filteredData;
};