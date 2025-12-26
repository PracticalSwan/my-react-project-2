// Register.jsx
import React, { useState } from "react";

export default function Register() {
  // Form state
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("male"); // default to male
  const [hobbies, setHobbies] = useState([]); // array for checkboxes
  const [role, setRole] = useState("general");

  // Data arrays
  const genders = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const hobbyOptions = [
    { value: "music", label: "Music" },
    { value: "movies", label: "Movies" },
    { value: "plastic_model", label: "Plastic Model" },
  ];

  const roles = [
    { value: "general", label: "General Staff" },
    { value: "developer", label: "Developer" },
    { value: "analyst", label: "System Analyst" },
  ];

  // Handler for checkbox hobbies
  const onHobbiesToggle = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      setHobbies((prev) => [...prev, value]);
    } else {
      setHobbies((prev) => prev.filter((item) => item !== value));
    }
  };

  return (
    <div className="register-container">
      <h2>Registration Form</h2>

      <form>
        {/* Username */}
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-text"
          />
        </div>

        {/* Firstname */}
        <div className="form-group">
          <label>Firstname</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="input-text"
          />
        </div>

        {/* Lastname */}
        <div className="form-group">
          <label>Lastname</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="input-text"
          />
        </div>

        {/* Gender */}
        <div className="form-group">
          <label>Gender</label>
          <div className="option-group">
            {genders.map((g) => (
              <label key={g.value} className="option-label">
                <input
                  type="radio"
                  name="gender"
                  value={g.value}
                  checked={gender === g.value}
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                {g.label}
              </label>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div className="form-group">
          <label>Hobbies</label>
          <div className="option-group">
            {hobbyOptions.map((h) => (
              <label key={h.value} className="option-label">
                <input
                  type="checkbox"
                  value={h.value}
                  checked={hobbies.includes(h.value)}
                  onChange={onHobbiesToggle}
                />{" "}
                {h.label}
              </label>
            ))}
          </div>
        </div>

        {/* Role */}
        <div className="form-group">
          <label>Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="input-text"
          >
            {roles.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
        </div>
      </form>

      {/* Live Preview Below */}
      <div className="display-data">
        <div className="data-row">
          <span className="data-label">Username:</span>
          <span className="data-value">{username || "-"}</span>
        </div>
        <div className="data-row">
          <span className="data-label">Firstname:</span>
          <span className="data-value">{firstname || "-"}</span>
        </div>
        <div className="data-row">
          <span className="data-label">Lastname:</span>
          <span className="data-value">{lastname || "-"}</span>
        </div>
        <div className="data-row">
          <span className="data-label">Gender:</span>
          <span className="data-value">
            {genders.find((g) => g.value === gender)?.label || "-"}
          </span>
        </div>
        <div className="data-row">
          <span className="data-label">Hobbies:</span>
          <span className="data-value">
            {hobbies.length > 0
              ? hobbyOptions
                  .filter((h) => hobbies.includes(h.value))
                  .map((h) => h.label)
                  .join(", ")
              : "-"}
          </span>
        </div>
        <div className="data-row">
          <span className="data-label">Role:</span>
          <span className="data-value">
            {roles.find((r) => r.value === role)?.label || "-"}
          </span>
        </div>
      </div>
    </div>
  );
}