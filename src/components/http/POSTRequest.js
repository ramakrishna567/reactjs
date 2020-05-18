import React, { Component } from 'react'
import axios from 'axios';

export class POSTRequest extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId: "",
            title: "",
            body: ""
        }
    }
    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(res=>console.log(res)       )
        .catch(err=>{
            throw err
        })
    }
    
    updateHandler = ()=>{
        axios.put('https://jsonplaceholder.typicode.com/posts/101', {userId:'123', title:"india", body:"india country reports"})
        .then(res=>{console.log(res);
        })
        .catch(errr=>{console.log(errr);
        })
    }

    deleteHandler = ()=>{
        axios.delete('https://jsonplaceholder.typicode.com/posts/101')
        .then(res=>{
            console.log("DELETED sucess!");
        })
        .catch(err=>{
            console.log("error");
        })
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userId" value={userId} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changeHandler} />
                    </div>
                    <button type="submit" >Submit</button>
                    <button type="reset" >Reset</button>
                </form>
                <button type="button" onClick={this.updateHandler} >Update</button>
                <button type="button" onClick={this.deleteHandler} >Delete</button>

            </div>
        )
    }
}

export default POSTRequest
