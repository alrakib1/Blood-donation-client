import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import Container from "../../Components/Shared/Container";

const Login = () => {
  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then((result) => {
        // console.log(result.user);

        if (result.user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login successful",
            showConfirmButton: false,
            timer: 2000,
          });
          navigate(from, { replace: true });
        }
      })
      .catch(() => {
        // console.log(error.message);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Email or Password is incorrect",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <Container>
      <div className="flex justify-center items-center h-full">
      <Helmet>
        <title>LifeFlowDonor | Login</title>
      </Helmet>
    <div className="container border mx-auto h-20 "></div>

      </div>

  
    </Container>
  );
};

export default Login;
{/* <div className=" ">
<div className="w-full">
  <h3 className="text-center text-white text-2xl font-bold">
    Login Here
  </h3>
  <form className="card-body text-black" onSubmit={handleLogin}>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-white">Email</span>
      </label>
      <input
        type="email"
        name="email"
        placeholder="email"
        className="input input-bordered"
        required
      />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text text-white">Password</span>
      </label>
      <input
        name="password"
        type="password"
        placeholder="password"
        className="input input-bordered"
        required
      />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">
          Forgot password?
        </a>
      </label>
    </div>
    <div className="form-control mt-6 w-1/4 mx-auto">
      <button
        type="submit"
        className="btn bg-white text-red-500 hover:bg-blue-500 hover:text-white border-0"
      >
        Login
      </button>
    </div>
  </form>
  <p className="text-white font-semibold text-xl text-center">
    Do not have an account ?{" "}
    <Link to="/signup">
      <span className="hover:text-blue-500">Signup</span>
    </Link>
  </p>
</div>
</div> */}