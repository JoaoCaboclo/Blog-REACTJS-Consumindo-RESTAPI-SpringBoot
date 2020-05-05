import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListPostComponent extends Component {
   
  
  constructor(props) {
    super(props)
    
     this.state = {
      lstPost: [],
      message: null
    }
    
    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.addPost = this.addPost.bind(this);
    this.reloadPostList = this.reloadPostList.bind(this);
  }
   
  componentDidMount() {
    this.reloadPostList();
  }
  
  reloadPostList() {
    ApiService.fetchPosts()
        .then((res) => {
            this.setState({lstPost: res.data })  
        });
  }

//  ESTE É O MÉTODFO CORRETO - SEM AXIOS
/*   componentDidMount() {
    const apiUrl = 'http://localhost:8085/posts';

    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            lstPost: result
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }
 */

deletePost(id) {
    ApiService.deletePost(id)
       .then(res => {
           this.setState({message : 'Post deleted successfully.'});
           this.setState({lstPost: this.state.lstPost.filter(post => post.id !== id)});
       })
}

editPost(id) {
    window.localStorage.setItem("postId", id);
    this.props.history.push('/edit-post');
}

addPost() {
    window.localStorage.removeItem("postId");
    this.props.history.push('/add-post');
}

   
render() {

//    podemos jogar a variavel de state para uma variável local  
//    const { lstPost } = this.state;

    return (
      <div>

          <h2 className="text-center">Posts</h2>
          <button className="btn btn-danger" onClick={() => this.addPost()}> Add Post</button>
          
          <table className="table table-striped">
              <thead>
                  <tr>
                      <th>Id</th>
                      <th>Title</th>
                      <th>content</th>
                      <th>Category</th>
                 </tr>
              </thead>
              <tbody>
                  { this.state.lstPost.map(postItem =>
                              <tr key={postItem.id}>
                                  <td>{postItem.id}</td>
                                  <td>{postItem.title}</td>
                                  <td>{postItem.content}</td>
                                  {postItem.postCategory != null &&
                                  <   td>{postItem.postCategory.nome}</td>
                                   }
                                  <td>
                                      <button className="btn btn-success" onClick={() => this.deletePost(postItem.id)}> Delete</button>
                                  </td>
                                  <td>
                                      <button className="btn btn-success" onClick={() => this.editPost(postItem.id)}> Edit</button>
                                  </td>
                       
                              </tr>
                      )
                  }
              </tbody>
          </table>
      </div>
    );
  }
}
export default ListPostComponent