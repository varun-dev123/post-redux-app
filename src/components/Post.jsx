import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from "../action/deletePost";

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);

    this.props.history.push("/");
  };

  render() {
    console.log(this.props);

    const renderPost = this.props.post ? (
      <div className="card">
        <h4 className="card-title">{this.props.post.title}</h4>

        <p>{this.props.post.body}</p>
        <button className="btn btn-danger" onClick={this.handleClick}>
          Delete Post
        </button>
      </div>
    ) : (
      <p>Loading your post</p>
    );
    return (
      <div className="section post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{renderPost}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapPostToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;

  return {
    post: state.posts.find(post => post.id == id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(mapPostToProps, mapDispatchToProps)(Post);
