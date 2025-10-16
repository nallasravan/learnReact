import { useEffect, useState } from "react"


export const Mountupdate = () =>{
const[component, setComponent] = useState(null)


   function handle(name) {
      switch(name){
        case "Login":
        setComponent(<Login/>);
        break;
        case "Logout":
        setComponent(<Logout/>);
        break;
        case "Register":
        setComponent(<Register/>);
        break;
        default:
            break;
      }
    }

    function login() {
        handle("Login");
    }

    function logout() {
        handle("Logout");
    }

    function register() {
        handle("Register");
    }
    return(

        <div>
            <h1>mount update</h1>
            <button onClick={login} className="btn btn-primary p-2 m-2 fs-3">Login</button>
            <button onClick={logout}  className="btn btn-primary p-2 m-2 fs-3">Logout</button>
            <button onClick={register}  className="btn btn-primary p-2 m-2 fs-3">Register</button>
<hr/>
            <div>
{component}
            </div>

        </div>
    )
}

export const Login = () =>{
    useEffect(()=>{
        console.log("login mount")

        return () =>{
           console.log("login unmount") 
        }

    },[])
    return(
        <div>
            <h1>Login component</h1>
        </div>
    )
}
export const Logout = () =>{
    useEffect(()=>{
        console.log("Logout mount") // mount phase

        return () =>{
           console.log("Logout unmount")  // unmount or remove phase
        }

    },[])
    return(
        <div>
            <h1>Logout component</h1>
        </div>
    )
}
export const Register = () =>{
    useEffect(()=>{
        console.log("Register mount")

        return () =>{
           console.log("Register unmount") 
        }

    },[])
    return(
        <div>
            <h1> Register component</h1>
        </div>
    )
}