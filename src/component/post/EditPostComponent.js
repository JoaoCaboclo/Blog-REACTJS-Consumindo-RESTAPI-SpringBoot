import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditPostComponent extends Component {

    constructor(props){
        super(props);
     
        this.state ={
            id: '',
            postTitle: '',
            postContent: '',
        }

        this.savePost = this.savePost.bind(this);
        this.loadPost = this.loadPost.bind(this);
    }

    componentDidMount() {
        this.loadPost();
    }

    loadPost() {
        ApiService.fetchPostById(window.localStorage.getItem("postId"))
            .then((res) => {
                let post = res.data;
                this.setState({
                   id: post.id,
                   postTitle: post.title,
                   postContent: post.content
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    savePost = (e) => {
        e.preventDefault();
        let post = {id: this.state.id, title: this.state.postTitle, content: this.state.postContent};
        ApiService.editPost(post)
            .then(res => {
                this.setState({message : 'Post uptudated successfully.'});
                this.props.history.push('/posts');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit User</h2>
                <form>

                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" placeholder="Post Title" name="postTitle" 
                       className="form-control" value={this.state.postTitle} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Content:</label>
                    <input type="text" placeholder="Post Content" name="postContent" 
                           className="form-control" value={this.state.postContent} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" onClick={this.savePost}>Save</button>
     

                </form>
            </div>
        );
    }
}

export default EditPostComponent;