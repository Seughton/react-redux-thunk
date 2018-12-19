import React, { Component } from "react";
import UserCard from './UserCard'
import '../styles/App.css';
import { connect } from 'react-redux';
import { itemsFetchData } from '../Action/items';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: null,
            hasErrored: false,
            isLoading: false
        }
    }
    componentDidMount() {
        this.props.fetchData('https://randomuser.me/api/')
    }

    render() {
           
        return (
            <>
                <h1>Users</h1>
                {
                    this.props.isLoading ?
                        <img src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
                        : null
                }
                {
                    this.props.hasErrored ?
                        <p>Sorry! There was an error loading the items</p>
                        : null
                }
                {this.props.items.results ? 
                <UserCard
                    user={this.props.items.results[0]}
                /> : null}
           
            </>
        );
    }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(App);