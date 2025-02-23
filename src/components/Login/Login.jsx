import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../../firebase.init";
import { Link } from "react-router-dom";

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [loginError, setLoginError] = useState("");
  const emailRef = useRef();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    //reset status
    setSuccess(false);
    setLoginError("");

    //login user
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);

        if (!result.user.emailVerified) {
          setLoginError("Please varify your email.");
        } else {
          setSuccess(true);
        }
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };


  const handleForgetPassword = () =>{
    console.log("get me email",emailRef.current.value)
    const email = emailRef.current.value;
    if(!email){
      console.log("please provide an email")
    }else{
      sendPasswordResetEmail(auth,email)
      .then(()=>{
        alert("password reset link has sent")
      })
    }
  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center w-1/2">
            <h1 className="text-5xl font-extrabold text-center text-emerald-600">
              Login
            </h1>
            <p className="py-6 text-center text-gray-600">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <p className="text-sm">
              New to this website?{" "}
              <Link to="/register">
                <span className="text-emerald-600 italic font-semibold underline">
                  Sign Up
                </span>
              </Link>{" "}
              now.{" "}
            </p>
          </div>
          <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl w-1/2 lg:mr-10">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  ref={emailRef}
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label onClick={handleForgetPassword} className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-success font-semibold">Login</button>
              </div>
            </form>
            <div>
              {success && (
                <p className="text-green-600 text-center">
                  Logged in successfully.
                </p>
              )}
              {loginError && (
                <p className="text-red-600 text-center"> {loginError} </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
