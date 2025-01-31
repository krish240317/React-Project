import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        {/* <a href="/create">New blog</a> */}
        <Link to="/create">New blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
