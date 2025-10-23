import { useEffect, useState } from "react";

// Main component that dynamically renders Login, Logout, or Register
export const Mountupdate = () => {
  const [component, setComponent] = useState(null);

  // Handles which component to render based on button click
  function handle(name) {
    switch (name) {
      case "Login":
        setComponent(<Login />);
        break;
      case "Logout":
        setComponent(<Logout />);
        break;
      case "Register":
        setComponent(<Register />);
        break;
      default:
        break;
    }
  }

  // Button click handlers
  function login() {
    handle("Login");
  }

  function logout() {
    handle("Logout");
  }

  function register() {
    handle("Register");
  }

  return (
    <div>
      <h1>Mount Update</h1>
      <button onClick={login} className="btn btn-primary p-2 m-2 fs-3">
        Login
      </button>
      <button onClick={logout} className="btn btn-primary p-2 m-2 fs-3">
        Logout
      </button>
      <button onClick={register} className="btn btn-primary p-2 m-2 fs-3">
        Register
      </button>
      <hr />
      <div>{component}</div>
    </div>
  );
};

// Login Component
export const Login = () => {
  useEffect(() => {
    console.log("login mount"); // Log when Login component is mounted

    return () => {
      console.log("login unmount"); // Log when Login component is unmounted
    };
  }, []);

  return (
    <div>
      <h1>Login component</h1>
    </div>
  );
};

// Logout Component
export const Logout = () => {
  useEffect(() => {
    console.log("Logout mount"); // Log when Logout component is mounted

    return () => {
      console.log("Logout unmount"); // Log when Logout component is unmounted
    };
  }, []);

  return (
    <div>
      <h1>Logout component</h1>
    </div>
  );
};

// Register Component
export const Register = () => {
  useEffect(() => {
    console.log("Register mount"); // Log when Register component is mounted

    return () => {
      console.log("Register unmount"); // Log when Register component is unmounted
    };
  }, []);

  return (
    <div>
      <h1>Register component</h1>
    </div>
  );
};
