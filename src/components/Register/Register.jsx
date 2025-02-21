import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useState } from "react";

const Register = () => {

  const [errorMessage, setErrorMessage] = useState("")
  const [success, setSuccess] = useState(false)

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value
    const password = event.target.password.value
    console.log(email, password)

    // reset error message
    setErrorMessage("")
    setSuccess(false)

    // if(password.length < 6){
    //   setErrorMessage('password atleast 6 characters');
    //   return;
    // }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passwordRegex.test(password)){
      setErrorMessage("password must contain A-Z,1-9,a-z,special character");
      return
    }

    // user with email and password
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      console.log(result.user)
      setSuccess(true)
    })
    .catch(error => {
      console.log("Error",error.message)
      setErrorMessage(error.message)
      setSuccess(false)
    })
  };
  return (
    <div className="w-96 mx-auto">
      <h1 className="text-center font-extrabold text-3xl my-5">Signup</h1>
      <form onSubmit={handleRegister}>
        <label className="input input-bordered flex items-center gap-2 my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="email" name="email" className="grow" placeholder="Email" />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="password" name="password" className="grow" placeholder="Password" />
        </label>
        <button className="btn btn-outline w-full btn-success">Signup</button>
      </form>
      <div>
        {
          errorMessage && <p className="text-center text-red-500">{errorMessage} </p>
        }
        {
          success && <p className="text text-green-500 text-center">Signed Up Successfully</p>
        }
      </div>
    </div>
  );
};

export default Register;
