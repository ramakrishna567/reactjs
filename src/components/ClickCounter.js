import React, { Component } from "react";
import UpdateComponent from '../components/higherOrderComponents/withCounter';

class ClickCounter extends Component {

    render() {
        const {count} = this.props;
        return (
            <div>
                <button onClick={this.props.incrementCount}>Clicked {count} times </button>
            </div>
        )
    }
}

export default UpdateComponent(ClickCounter, 1);