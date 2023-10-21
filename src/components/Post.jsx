import React from "react";
const Post = ({ post }) => {

  return (
    <article className="post-container">
      <h1 className="title">{post.title}</h1>
      <div className="published-time">
        <i className="fa fa-clock"></i>
        <span>{ new Date(post.updatedAt).toDateString()}</span>
      </div>
      
      <div className="content" dangerouslySetInnerHTML={{__html: post.content.html}}/>
   
    </article>
  );
};

export default Post;
