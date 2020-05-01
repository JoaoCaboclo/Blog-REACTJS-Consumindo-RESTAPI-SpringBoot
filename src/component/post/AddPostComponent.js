import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddPostComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            postTitle: '',
            postContent: '',
        }
        this.savePost = this.savePost.bind(this);
    }

    savePost = (e) => {
        e.preventDefault();
        let post = {title: this.state.postTitle, content: this.state.postContent};
        ApiService.addPost(post)
            .then(res => {
                this.setState({message : 'Post added successfully.'});
                this.props.history.push('/posts');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add Post</h2>
                <form>
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" placeholder="Post Title" name="postTitle" 
                       className="form-control" value={this.state.postTitle} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Content:</label>
                    <input type="text" placeholder="Post Content" name="postContent" className="form-control" value={this.state.password} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" onClick={this.savePost}>Save</button>
            </form>
    </div>
        );
    }
}
export default AddPostComponent;