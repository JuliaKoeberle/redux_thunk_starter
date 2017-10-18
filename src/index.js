import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ItemList from './components/ItemList';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
<Provider store={store}>
    <div className="container">
        <ItemList />
    </div>
</Provider>, document.getElementById('root'));
