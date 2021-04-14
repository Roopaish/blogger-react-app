import { BrowserRouter, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1 className="title">Blogger</h1>
      <div className="nav-links">
        <BrowserRouter>
          <NavLink
            exact
            to="/"
            activeStyle={{ color: "whitesmoke" }}
            activeClassName="active"
            className="nav-link"
          >
            <span>Home</span>
          </NavLink>
          <NavLink
            exact
            to="/newblog"
            activeClassName="active"
            activeStyle={{ color: "whitesmoke" }}
            className="nav-link"
          >
            <span>New Blog</span>
          </NavLink>
        </BrowserRouter>
      </div>
    </nav>
  );
};

export default Navbar;
