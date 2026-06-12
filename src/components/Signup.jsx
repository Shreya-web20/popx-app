import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/profile");
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h1>Create your PopX account</h1>

        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          onChange={handleChange}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          name="phone"
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Email Address"
          name="email"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Company Name"
          name="company"
          onChange={handleChange}
        />

        <div className="agency">
          <p>Are you an Agency?</p>

          <label>
            <input
              type="radio"
              name="agency"
              value="Yes"
              checked={formData.agency === "Yes"}
              onChange={handleChange}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="agency"
              value="No"
              checked={formData.agency === "No"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        <button onClick={handleSubmit}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Signup;