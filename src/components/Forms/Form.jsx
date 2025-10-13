import { useState } from "react";

const Forms = () => {
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");

  function handleUsername(e) {
    setUsername(e.target.value);
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

  function formSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");

    const formData = {
      username: username,
      mobile: mobile,
      gender: gender,
      city: city,
    };

    console.log("formData =", formData);
    debugger;

    // Reset form fields
    setUsername("");
    setMobile("");
    setGender("");
    setCity("");
  }

  return (
    <div>
      <div>Today learning forms</div>

      <div className="container">
        <div>User Register</div>

        <form onSubmit={formSubmit}>
          <dl>
            <dt>Username</dt>
            <dd>
              <input type="text" value={username} onChange={handleUsername} required />
            </dd>

            <dt>Mobile</dt>
            <dd>
              <input type="number" value={mobile} onChange={handleMobileChange}  required/>
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
              <select value={city} onChange={handleCityChange}>
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
    </div>
  );
};

export default Forms;