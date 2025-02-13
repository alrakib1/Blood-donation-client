import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  return (
    <div className="text-sm">
      <div className=" h-full max-w-[300px] border rounded-md flex flex-col justify-between bg-gradient-to-r from-teal-500 to-teal-900 text-black shadow-lg">
        <figure className=" flex justify-center max-w-[326px] max-h-[155px] mx-auto ">
          <img className="rounded-t-md" src={blog.image} alt="blog-image" />
        </figure>
        <div className="my-5">
          <h2 className="card-title max-h-[90px] text-base py-4 px-4 ">
            {blog.title}
          </h2>
          <div className="card-actions justify-center mt-auto">
            <Link to={`/details/${blog._id}`}>
              {" "}
              <button className=" py-1 px-2 rounded-md bg-white font-semibold hover:bg-blue-900 hover:text-black transition-all animate-pulse hover:animate-none  text-blue-950 outline-none border-none">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.node,
};

export default Blog;
