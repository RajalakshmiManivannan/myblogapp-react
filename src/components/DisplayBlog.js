import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getAllPost} from '../actions/blogActions'

 class DisplayBlog extends Component {
constructor(props){
  super(props);
  //getAllPost();
  
}
 componentDidMount(){
    this.props.getAllPost();
  }

  componentWillReceiveProps(nextprops){
    console.log(nextprops);
  }
    render() {
        return (
          <div>{this.props.post[0]._id}</div>
/*<div>
              <p>this.props.post</p>
            {this.props.post ? (
                              <table style="width:100%">
  <tr>
    <th>Title</th>
    <th>Author</th> 
    {/* <th>Description</th>
    <th>Date</th>
    <th>Tag</th> 
  </tr>
  <tbody>
  {JSON.stringify(this.props)}
  {this.props.post.map(post => (
                <tr key={post._id}>
                  <td>
                        {post.title}
                  </td>
                  <td>
                    {post.author}
                  </td>
                </tr>
              ))}
  </tbody>
</table>) : (<div> No data to display</div>)}
  </div>*/
        )
    }
}

const mapsStateToProps = state => ({
    post : state.post
});



export default connect(mapsStateToProps,{getAllPost})(withRouter(DisplayBlog)); 


