import { BrowserRouter, Link } from "react-router-dom";

//blogs rae received as props here
const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          {/* Id will be passed to BlogDetails using Params  */}
          <BrowserRouter>
            <Link to={`/blogs/${blog.id}`}>
              <h1>{blog.title}</h1>
              <p>Written By: {blog.author}</p>
            </Link>
          </BrowserRouter>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
