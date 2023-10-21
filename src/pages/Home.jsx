import React from "react";
import { QUERY_POSTS } from "../Graphql/Queries";
import Posts from "../components/Posts";
import useQueryPosts from "../hooks/useQueryPosts";

const Home = () => {
  const {posts, error, status} = useQueryPosts({ query: QUERY_POSTS  }) // default limit of a post in the home page {limit : 4 or whatever}
 
   if(status ==='success' && posts.length=== 0) {return "not found"}
  if (error) {
    return <h2 style={{ textAlign: 'center' }}> {error}</h2>;
  }

  return (
    <>
      
      <Posts posts={ posts} />
    </>
  );
};

export default Home;
