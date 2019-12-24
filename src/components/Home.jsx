import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    const { posts } = this.props;
    const renderPosts = posts.map(post => {
      return (
        <div className="card mb-4" key={post.id}>
          <Link to={"/" + post.id}>
            <h4 className="card-title">{post.title}</h4>
            <p>{post.body}</p>
          </Link>
        </div>
      );
    });
    return (
      <div className="section home">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>Posts List</h3>
              {renderPosts}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
