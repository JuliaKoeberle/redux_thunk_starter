import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

class ItemList extends Component {

    componentDidMount() {
        this.props.fetchData('https://jsonplaceholder.typicode.com/posts');
    }    

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <ul className="list-group">
                {this.props.items.map((item) => (
                    <li className="list-group-item" key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                        <p><em>provided by user:  {item.userId}</em></p>
                    </li>
                ))}
            </ul>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
