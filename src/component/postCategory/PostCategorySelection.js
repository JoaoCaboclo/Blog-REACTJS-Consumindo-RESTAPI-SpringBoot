import React, { Component } from 'react'
import ApiPostCategoryService from "../../service/ApiPostCategoryService";
import Form from 'react-bootstrap/Form'


class PostCategorySelection extends Component {
   
  constructor(props) {
    super(props)
    
     this.state = {
      lstPostCategory: [],
      message: null,
      selectItem:0
    }
    this.reloadPostCategoryList = this.reloadPostCategoryList.bind(this);
    this.handleSelectItem = this.handleSelectItem.bind(this);

  }
   
  componentDidMount() {
    this.reloadPostCategoryList();
  }
  
  reloadPostCategoryList() {
    ApiPostCategoryService.fetchPosts()
        .then((res) => {
            this.setState({lstPostCategory: res.data })  
        });
  }
 
  handleSelectItem(e) {
    this.setState({selectItem: e.target.value});
    this.props.onChange(e);
  };

render() {
 
  return (
      <div className="form-row">
        <Form.Group controlId="formPostCategory">
          <Form.Label>Categoria do Post</Form.Label>
          <Form.Control as="select"  value={this.state.selectItem} onChange={this.handleSelectItem} >
             <option value="0">-- Selecione --</option>
             { this.state.lstPostCategory.map((item, index) => (
                 <option key={index} value={item.id} >{item.nome}</option>
              ))}
          </Form.Control>
        </Form.Group>
    </div> 

    );
  }
}
export default PostCategorySelection