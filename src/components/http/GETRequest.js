import React, { Component } from 'react';
import axios from 'axios';

export class GETRequest extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log("Res", res.data);
            this.setState({posts :res.data })
            
        })
        .catch(err=>{
            throw err;
        })
    }

    render() {
        const {posts} = this.state
        return (
            <div>
                posts here
                {
                    posts.length ?
                    posts.map(post=> <div key={post.id}> {post.title} </div>) : null
                }
            </div>
        )
    }
}

export default GETRequest
