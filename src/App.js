import React, {Component} from 'react';
import './App.css';
import ProductsPageContainer from "./containers/ProductsPageContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <ProductsPageContainer/>
            </div>
        );
    }
}

export default App;
