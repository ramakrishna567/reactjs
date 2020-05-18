import React, { Component } from 'react'
import ComponentF from './ComponentF'
import ComponentE from './ComponentE'

class ComponentC extends Component {
    render() {
        return (
            <div>
                {/* <ComponentF /> */}
                <ComponentE />
            </div>
        )
    }
}

export default ComponentC
