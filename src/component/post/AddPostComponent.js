import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import PostCategorySelection from "../../component/postCategory/PostCategorySelection";

class AddPostComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            postTitle: '',
            postContent: '',
            postCategoryid:0,
            postCategory:{id:0, nome: ''}
        }
        
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onChangeTitle   =  this.onChangeTitle.bind(this);
        this.savePost = this.savePost.bind(this);
     }

    savePost = (e) => {
        e.preventDefault();
        let postCategory = {id: this.state.postCategoryid, nome: ''}
        let post = {title: this.state.postTitle, content: this.state.postContent,
                    postCategory: postCategory}

        ApiService.addPost(post)
            .then(res => {
                this.setState({message : 'Post added successfully.'});
                this.props.history.push('/posts');
            });
    }

    onChange = (e) => {
        this.setState({postCategoryid: e.target.value})
    };

    onChangeTitle = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onChangeContent = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return(
            <div>
                <h2 className="text-center">Add Post</h2>
                <form>
                   <PostCategorySelection  onChange={this.onChange}></PostCategorySelection>

                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" placeholder="Post Title" name="postTitle" 
                       className="form-control" value={this.state.postTitle} onChange={this.onChangeTitle}/>
                </div>

                <div className="form-group">
                    <label>Content:</label>
                    <input type="text" placeholder="Post Content" name="postContent"
                     className="form-control" value={this.state.postContent} 
                     onChange={this.onChangeContent}/>
                </div>

                <button className="btn btn-success" onClick={this.savePost}>Save</button>
            </form>
    </div>
        );
    }
}
export default AddPostComponent;