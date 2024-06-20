import { useEffect, useState } from "react";
import Bloglist from "./bloglist";
import useFetch from "./useFetch";

// const Home = () => {

//     // const[name,setname]=useState("Krish");

//     // const handelbutton=(e)=>{
//     //     setname("Aarchi");
//     // }
//     // const handelbutton2=(name,e)=>{
//        // console.log("Hi"+name,e);
//     // }
//     return (
//         <div className="homepage">
//             <h1>Homepage</h1>
//             {/* <p>{name}</p> */}
//             {/* <button onClick={handelbutton} >Click me</button> */}
//             {/* <button onClick={(e)=>{handelbutton2("Krish",e)}} >Click me again </button> */}
//         </div>
//      );
// }

const Home = () => {
  //setting up blog data in array of list
  //there should be key property in every this type of db as react need to keep track of new added and delete
  //We will use this blog list component
  //    { title: 'My new website', body: 'lorem ipsum...', author: 'krish', id: 1 },
  //    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
  //    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'krish', id: 3 }

  // const handeldelete=(id)=>{
  //     const newblog=blog.filter(blog=>blog.id !== id);
  //     setblog(newblog);
  // }

  // fetching data

  const {
    data: blog,
    pending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {pending && <div>Loading...</div>}
      {/* doing && with that because once the data is render then only go to second statement  and we know initially we set blog to null */}
      {blog && <Bloglist blog={blog} title="All Blogs!" />}
      {/* <Bloglist blog={blog.filter((blog)=>blog.author==="krish")} title="Krish's Blogs"/> */}
    </div>
  );
};
export default Home;
