import { useState, useEffect } from "react";
import { useParams , useLocation} from "react-router-dom";
import { graphcms  } from "../Graphql/Queries";
import { useMyContext } from "../context/store";

const useQueryPosts = ({query, limit = 10}) => {  // the author has put the limit of 6 this will tell the number of blogs on the home page .
  const { slug } = useParams();

  const { search, pathname } = useLocation(); 

  const page = Number(new URLSearchParams(search).get("page")) || 1;

  const skip = (page - 1) * limit;


  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');

  const { setLoading, setTotalPage } = useMyContext(); 

  useEffect(() => {
    // when the pathname change  => set the pagination  = 1 to hide pagination 
    setTotalPage(1)
  },[pathname,setTotalPage])
 
  useEffect(() => {
    setStatus('start')
    setLoading(true);

    graphcms
      .request(query, { slug, limit , skip })
      .then((res) => {
        setStatus('success')
        const count = res?.countConnection?.aggregate?.count || 0;
         setTotalPage(Math.ceil(count / limit));
          /* console element */  
        
            setPosts(res.posts)
            setError(null)
        })
      .catch(error => {
        setStatus('error')
        setTotalPage(1)
          setError(error.message)
          setPosts([])
      })
      .finally(()=> setLoading(false))
  }, [query, slug, limit, skip, setLoading, setTotalPage]);
  return {posts , error, status};
};

export default useQueryPosts;
