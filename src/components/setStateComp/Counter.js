import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    clickHandler = () => {
        // this.setState({ count: this.state.count + 1 })
        this.setState(prevState=>({
            count : prevState.count+1
        }))
    }

    render() {
        return (
            <div>
                <p>counter - {this.state.count}</p>
                <button onClick={this.clickHandler} >Increment</button>
            </div>
        )
    }
}

export default Counter
