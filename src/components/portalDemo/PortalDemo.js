import React, { Component } from 'react'
import ModalComp from './ModalComp';

// Portal Provides the ability to break out DOM in Reactjs
// function PortalDemo() {
//     return ReactDOM.createPortal (
//              <h1>Portal Demo</h1>, document.getElementById('portal-root')
//     )
// }


export class PortalDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showModal: false
        }
    }

    handleCloseModal = () => this.setState({ showModal: false })
    handleShowMessageClick = () => this.setState({ showModal: true })

    render() {
        return (
            <div>
                <button onClick={this.handleShowMessageClick}>
                    Show Secret Modal
                 </button>
                {this.state.showModal ? (
                    <ModalComp onClose={this.handleCloseModal}>
                        This is the secret modal message!
                    </ModalComp>
                ) : null}
            </div>
        )
    }
}


export default PortalDemo
