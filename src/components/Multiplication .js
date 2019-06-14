import React, { Component } from 'react';
import {connect} from 'react-redux';

class Multiplication  extends Component {
    mult = () =>{
        this.props.dispatch({type: 'MULT'})
    }  

    divi = () => {
        this.props.dispatch({type: 'DIVI'})
    }
    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.mult}>%</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.divi}>x</button>
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

export default connect (mapStateToProps)(Multiplication);