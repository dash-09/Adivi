import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { graphcms, CREATE_COMMENT, PUBLISH_COMMENT } from "../Graphql/Mutations";

const Comments = ({ comments }) => {
  const { slug } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [save, setSave] = useState(true);
  const [loading, setLoading] = useState(false);

 async function handleComment(e) {
    e.preventDefault();
    const obj = { name, email, comment, slug };
    if (save) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("name", name);
      localStorage.removeItem("email", email);
    }
   setLoading(true)
   const { createComment } = await graphcms.request(CREATE_COMMENT, obj);
   await graphcms.request(PUBLISH_COMMENT,{id: createComment?.id})
    
   setLoading(false)
  }

  return (
    <div className="comments">
      <h2> Leave a reply</h2>
      <form onSubmit={handleComment}>
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />
        <textarea
          autoComplete="off"
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Comment"
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className="check">
          <input
            type="checkbox"
            id="chk"
            onChange={(e) => setSave(e.target.checked)}
            checked={save}
          />
          <label htmlFor="chk"> save my details for reuse</label>
        </div>
        <button disabled ={loading}> {loading ? 'Loading...' : 'Post Comment'} </button>
      </form>

      <div>
        {comments?.map((comment) => (
          <div className="content" key={comment.id}>
            <strong>
              <i className="fa-solid fa-user"></i>
              {comment.name} ({comment.email})
            </strong>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
