import React, { Component, PureComponent } from 'react'
// import RegComp from './RegComp';
// import PureComp from './PureComp';
import MemoComp from '../memo/MemoComp';

export class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Rama"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Rama"
            })
        }, 2000);
    }
    render() {
        console.log("======Parent Component Reder===");
        
        return (
            <div>
                Parent Component
                {/* <RegComp name={this.state.name} /> */}
                {/* <PureComp  name={this.state.name} /> */}
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
