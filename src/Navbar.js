import { BrowserRouter, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <BrowserRouter>
        <NavLink exact to="/">
          <h1 className="title">Blogger</h1>
        </NavLink>
        <div className="nav-links">
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
        </div>
      </BrowserRouter>
    </nav>
  );
};

export default Navbar;
