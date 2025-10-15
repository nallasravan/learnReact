import { useState } from "react";
import Child from "../Controlledcomponents/Child";

const Formfocusout = () => {
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  function handleUsername(e) {
    setUsername(e.target.value);
    setError(""); // Clear error on change
  }

  function handleMobileChange(e) {
    setMobile(e.target.value);
  }

  function handleGenderChange(e) {
    setGender(e.target.value);
  }

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  function validateUsername(name) {
    const capital = /^[A-Z]/.test(name);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(name);
    const hasNumber = /\d/.test(name);
debugger
    if (!capital) {
      setError("Username must start with a capital letter.");
      return false;
    }
    if (!hasSpecialChar) {
      setError("Username must contain at least one special character.");
      return false;
    }
    if (!hasNumber) {
      setError("Username must contain at least one numerical digit.");
      return false;
    }

    return true;
  }
  function focusoutname(){
    debugger
       const validating = validateUsername(username)
debugger
    if (!validating) {
      return;
    }
  }

  function formSubmit(e) {
    e.preventDefault();
    const validating = validateUsername(username)
debugger
    if (!validating) {
      return;
    }

    const formData = {
      username,
      mobile,
      gender,
      city,
    };

    console.log("Form submitted:", formData);

    // Reset form fields
    setUsername("");
    setMobile("");
    setGender("");
    setCity("");
    setError("");
  }

  return (
    <div>
      <h2>Today learning forms</h2>

      <div className="container">
        <h3>User Register</h3>

        <form onSubmit={formSubmit}>
          <dl>
            <dt>Username</dt>
            <dd>
              <input
                type="text"
                value={username}
                onChange={handleUsername}
                onBlur={focusoutname}
                onKeyUp={focusoutname}
                required
              />
            </dd>

            {/* <dd className="text-danger">Error: {error}</dd> */}
            {error && <dd className="text-danger">Error: {error}</dd>}

            <dt>Mobile</dt>
            <dd>
              <input
                type="number"
                value={mobile}
                onChange={handleMobileChange}
                required
              />
            </dd>

            <dt>Gender</dt>
            <dd>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={handleGenderChange}
              />
              <span>Male</span>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={handleGenderChange}
              />
              <span>Female</span>
            </dd>

            <dt>City</dt>
            <dd>
              <select value={city} onChange={handleCityChange} required>
                <option value="">Select City</option>
                <option value="hyd">Hyderabad</option>
                <option value="pune">Pune</option>
              </select>
            </dd>
          </dl>

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>

      <div>
        <p>Username: {username}</p>
        <p>Mobile: {mobile}</p>
        <p>Gender: {gender}</p>
        <p>City: {city}</p>
      </div>

      <div>rendering child component</div>

    {/* <Child backgroundColor="red" cardheader="bathroom" cardbndy="Toilet.png" cardfooter="explore" /> */}
    </div>
  );
};

export default Formfocusout;
