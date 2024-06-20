import { useState } from "react";
//for redirect
import { useHistory } from "react-router-dom";

const Create = () => {
  //to keep track changes what you write in input
  const [title, settitile] = useState("");
  const [body, setbody] = useState("");
  const [author, setauthor] = useState("mario");
  const history = useHistory();

  const handelsubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    console.log(blog);

    //add new blog to data base or server
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New Blog Added");
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add New Blog</h2>
      <form onSubmit={handelsubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => settitile(e.target.value)}
        />

        <label> Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setbody(e.target.value)}
        ></textarea>

        <label>Blog Author</label>
        <select value={author} onChange={(e) => setauthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>

        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
