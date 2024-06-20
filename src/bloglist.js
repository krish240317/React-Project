import { Link } from "react-router-dom";
const Bloglist = ({ blog, title }) => {
  // we can acces anuthing from pass that has been pass
  // const blog =props.blog;
  // const title=props.title;

  // const titles=props.titles
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {/* will use map method to iterate to each blogs as value of blog may changes everytime also hard coding div is not good option*/}
      {/* this line iterate through every item in array  */}

      {blog.map((item) => (
        <div className="blog-preview" key={item.id}>
          {/* passing id a variable in link  */}
          <Link to={`/blog/${item.id}`}>
            <h2>{item.title}</h2>
            <p>Written by {item.author}</p>
          </Link>

          {/* <button onClick={()=>handeldelete(item.id)} >Delete blog</button> */}
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
