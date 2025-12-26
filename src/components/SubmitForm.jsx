import React, { useState, useRef } from "react";

export default function RegisterForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Refs
  const usernameRef = useRef(null);
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const roleRef = useRef(null);
  const genderRefs = useRef([]);
  const hobbyRefs = useRef([]);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedGender = genderRefs.current.find((el) => el && el.checked)?.value;
    const selectedHobbies = hobbyRefs.current
      .filter((el) => el && el.checked)
      .map((el) => el.value);

    const data = {
      username: usernameRef.current.value,
      firstname: firstnameRef.current.value,
      lastname: lastnameRef.current.value,
      gender: selectedGender,
      hobbies: selectedHobbies,
      role: roleRef.current.value,
    };

    setSubmittedData(data);
    setIsSubmitted(true);
  };

  const handleBack = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="register-container">
      {isSubmitted ? (
        <div>
          <h2>Submit Data</h2>
          <div>
            <span className="data-label">Username: </span>
            <span className="data-value">{submittedData.username}</span>
          </div>
          <div>
            <span className="data-label">Firstname: </span>
            <span className="data-value">{submittedData.firstname}</span>
          </div>
          <div>
            <span className="data-label">Lastname: </span>
            <span className="data-value">{submittedData.lastname}</span>
          </div>
          <div>
            <span className="data-label">Gender: </span>
            <span className="data-value">
              {submittedData.gender}
            </span>
          </div>
          <div>
            <span className="data-label">Hobbies: </span>
            <span className="data-value">
              {submittedData.hobbies.join(", ")}
            </span>
          </div>
          <div>
            <span className="data-label">Role: </span>
            <span className="data-value">
              {roles.find((r) => r.value === submittedData.role)?.label || "-"}
            </span>
          </div>
          <button onClick={handleBack} style={{ marginTop: "20px" }}>
            Back to Form
          </button>
        </div>
      ) : (
        <>
          <h2>Registration Form</h2>
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                ref={usernameRef}
                className="input-text"
                defaultValue={submittedData?.username || ""}
              />
            </div>

            {/* Firstname */}
            <div className="form-group">
              <label>Firstname</label>
              <input
                type="text"
                ref={firstnameRef}
                className="input-text"
                defaultValue={submittedData?.firstname || ""}
              />
            </div>

            {/* Lastname */}
            <div className="form-group">
              <label>Lastname</label>
              <input
                type="text"
                ref={lastnameRef}
                className="input-text"
                defaultValue={submittedData?.lastname || ""}
              />
            </div>

            {/* Gender */}
            <div className="form-group">
              <label>Gender</label>
              <div>
                {genders.map((g, index) => (
                  <label key={g.value} className="option-label">
                    <input
                      type="radio"
                      name="gender"
                      value={g.value}
                      defaultChecked={submittedData ? submittedData.gender === g.value : g.value === ""}
                      ref={(el) => (genderRefs.current[index] = el)}
                    />{" "}
                    {g.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div className="form-group">
              <label>Hobbies</label>
              <div>
                {hobbyOptions.map((h, index) => (
                  <label key={h.value} className="option-label">
                    <input
                      type="checkbox"
                      value={h.value}
                      defaultChecked={submittedData?.hobbies?.includes(h.value)}
                      ref={(el) => (hobbyRefs.current[index] = el)}
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
                ref={roleRef}
                className="input-text"
                defaultValue={submittedData?.role || "general"}
              >
                {roles.map((r) => (
                  <option key={r.value} value={r.value}>
                    {r.label}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" style={{ marginTop: "20px" }}>
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
}
