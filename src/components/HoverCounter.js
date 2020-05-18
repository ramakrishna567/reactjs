import React, { Component } from 'react'
import UpdateComponent from '../components/higherOrderComponents/withCounter';

class HoverCounter extends Component {

    render() {
        const {count} = this.props;

       return (
            <div onMouseOver={this.props.incrementCount}>
                <h2>Clicked {count} times {this.props.name} </h2>
            </div>
        )
    }
}

export default UpdateComponent(HoverCounter, 5);
