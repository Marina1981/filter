import {reducer as productsPageReducer} from "./productsPageReducer";
import {combineReducers} from "redux";



const  rootReducer = combineReducers({
    productsPage: productsPageReducer
});

export default rootReducer;