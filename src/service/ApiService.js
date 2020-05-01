import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8085/posts';

class ApiService {

    fetchPosts() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchPostById(postId) {
        return axios.get(USER_API_BASE_URL + '/' + postId);
    }

    deletePost(postId) {
        return axios.delete(USER_API_BASE_URL + '/' + postId);
    }

    addPost(post) {
        return axios.post(""+USER_API_BASE_URL, post);
    }

    editPost(post) {
        return axios.put(USER_API_BASE_URL + '/' + post.id, post);
    }

}

export default new ApiService();
