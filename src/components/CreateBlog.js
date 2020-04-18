import React, { Component } from 'react'

import TextFieldGroup from '../shared/TextFieldGroup';
import TextAreaField from '../shared/TextAreaField';
import DateField from '../shared/DateField'
import {createNewPost} from '../actions/blogActions'

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class CreateBlog extends Component {
constructor(props){
    super(props);

    this.state = {
        title:"",
        author:"",
        description:"",
        date:"",
        tag:""
    };

    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    //this.onTagChange=this.onTagChange.bind(this);
}

onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

onSubmit(e){
    e.preventDefault();
      console.log(this.state);
      const blogData = {
        title:this.state.title,
        author:this.state.author,
        description:this.state.description,
        date:this.state.date,
        tag:this.state.tag
      };
      
      this.props.createNewPost(blogData,this.props.history);

  }

/*onTagChange(e){
    this.setState({ [e.taget.name]: [...this.state.tag, this.target.value] })
  }*/




    render() {
        return (
            <div>
                <header>My Blog</header>
                <div class="container"> 
                    <div class="row"> 

               <form onSubmit={this.onSubmit}>
                   <TextFieldGroup
                    type = "text"
                    placeholder = "Title"
                    name = "title"
                    value={this.state.title}
                    onChange={this.onChange}
                    />
                   <TextFieldGroup
                    type = "text"
                    placeholder = "Author"
                    name = "author"
                    value={this.state.author}
                    onChange={this.onChange}
                    />
                    <DateField
                    type="date"
                    name="date"
                    value={this.state.date}
                    onChange={this.onChange}
                    />

                    
                    <TextAreaField
                    placeholder = "Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                    />

                   <div class="form-group">
                   <TextFieldGroup
                    type = "text"
                    placeholder = "Tag1"
                    name = "tag"
                    value={this.state.tag}
                    onChange={this.onChange}
                    />
                   {/*<TextFieldGroup
                    type = "text"
                    placeholder = "Tag2"
                    name = "tag"value={this.state.tag.tag2}
                    onChange={this.onTagChange}
                    />
                   <TextFieldGroup
                    type = "text"
                    placeholder = "Tag3"
                    name = "tag"
                    value={this.state.tag.tag3}
                    onChange={this.onTagChange}
                   />*/}
                   </div>
                   <div>
                       <input type="submit"></input>
                   </div>
               </form>
               </div>
               </div>
            </div>
        )
    }
}



export default connect(null, {createNewPost})(withRouter(CreateBlog));
