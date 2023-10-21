import React from "react";
import {  QUERY_SEARCH_POSTS } from "../Graphql/Queries";
import Posts from "../components/Posts";
import useQueryPosts from "../hooks/useQueryPosts";

const SearchResult = () => {

  const { posts, error , status} = useQueryPosts({ query: QUERY_SEARCH_POSTS , limit :4 });

if (status === "success" && posts.length === 0) {
  return "not found";
}

  if (error) {
    return <h2 style={{ textAlign: "center" }}> {error}</h2>;
  }

 
  return (
    <>
      <Posts posts={posts} />
    </>
  );
};

export default SearchResult;
