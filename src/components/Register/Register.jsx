import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // reset error message
    setErrorMessage("");
    setSuccess(false);

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters");
      return;
    }

    // Simpler password validation
    if (!/[A-Z]/.test(password)) {
      setErrorMessage("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[0-9]/.test(password)) {
      setErrorMessage("Password must contain at least one number");
      return;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      setErrorMessage(
        "Password must contain at least one special character (!@#$%^&*)"
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);
        setErrorMessage("");
        event.target.reset();
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setErrorMessage("This email is already registered");
        } else {
          setErrorMessage(error.message);
        }
        setSuccess(false);
      });
  };

  const handleTogglePassword = (e) => {
    e.preventDefault(); // Prevent form submission
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-96 mx-auto">
      <h1 className="text-center font-extrabold text-3xl my-5">Sign Up</h1>
      <form onSubmit={handleRegister}>
        <label className="input input-bordered flex items-center gap-2 my-4">
          <input
            type="email"
            name="email"
            className="grow"
            placeholder="Email"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="grow"
            placeholder="Password"
            required
          />
          <button
            type="button" // Changed to type="button"
            onClick={handleTogglePassword}
            className="btn btn-xs absolute right-2"
          >
            {showPassword ? <LuEyeOff /> : <LuEye />}
          </button>
        </label>
        <button type="submit" className="btn btn-outline w-full btn-success">
          Sign Up
        </button>
      </form>
      <div className="mt-4">
        {errorMessage && (
          <p className="text-center text-red-500">{errorMessage}</p>
        )}
        {success && (
          <p className="text-center text-green-500">
            Account created successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default Register;
