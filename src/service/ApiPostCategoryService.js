import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8085/postcategory';

class ApiPostCategoryService {

    fetchPosts() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchPostById(postcategoryId) {
        return axios.get(USER_API_BASE_URL + '/' + postcategoryId);
    }

    deletePost(postcategoryId) {
        return axios.delete(USER_API_BASE_URL + '/' + postcategoryId);
    }

    addPost(postcategory) {
        return axios.post(""+USER_API_BASE_URL, postcategory);
    }

    editPost(postcategory) {
        return axios.put(USER_API_BASE_URL + '/' + postcategory.id, postcategory);
    }
}
export default new ApiPostCategoryService();
