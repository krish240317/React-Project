import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Blogdetails = () => {
  const { id } = useParams(); //use to fetch id comes in link
  //adding fetching functionality in it also
  const {
    data: blog,
    ispending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();


  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {ispending && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by - {blog.author} </p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default Blogdetails;
