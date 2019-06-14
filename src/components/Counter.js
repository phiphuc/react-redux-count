import React, { Component } from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
    increment = () =>{
        this.props.dispatch({type: 'INCREMENT'})
    }  

    decrement = () => {
        this.props.dispatch({type: 'DECREMENT'})
    }
    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.increment}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.decrement}>+</button>
                </div>
            </div>
     
       );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        count: state.count
    }
}

export default connect (mapStateToProps)(Counter);