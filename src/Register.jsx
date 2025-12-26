import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        firstname: '',
        lastname: '',
        gender: '',
        role: ''
    });
    const [hobbies, setHobbies] = useState([]);

    const genderOptions = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Others', value: 'Others' }
    ];

    const hobbyOptions = [
        { label: 'Music', value: 'Music' },
        { label: 'Movies', value: 'Movies' },
        { label: 'Plastic Model', value: 'Plastic Model' }
    ];

    const roleOptions = [
        { label: 'General staff', value: 'General staff' },
        { label: 'Developer', value: 'Developer' },
        { label: 'System Analyst', value: 'System Analyst' }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const onHobbiesToggle = (event) => {
        const targetValue = event.target.value;
        const isChecked = event.target.checked;
        if (!isChecked) {
            setHobbies((prev) => {
                return prev.filter((item) => {
                    if (item == targetValue) return false;
                    else return true;
                })
            });
        } else {
            setHobbies((prev) => {
                return [...prev, targetValue];
            });
        }
    };

    return (
        <div className="register-container">
            <h2>Registration Form</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label>Username: </label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                </div>
                <div>
                    <label>Firstname: </label>
                    <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
                </div>
                <div>
                    <label>Lastname: </label>
                    <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
                </div>
                <div>
                    <label>Gender: </label>
                    {genderOptions.map((option) => (
                        <label key={option.value} style={{ marginLeft: '10px' }}>
                            <input
                                type="radio"
                                name="gender"
                                value={option.value}
                                checked={formData.gender === option.value}
                                onChange={handleChange}
                            />
                            {option.label}
                        </label>
                    ))}
                </div>
                <div>
                    <label>Hobbies: </label>
                    {hobbyOptions.map((option) => (
                        <label key={option.value} style={{ marginLeft: '10px' }}>
                            <input
                                type="checkbox"
                                value={option.value}
                                onChange={onHobbiesToggle}
                                checked={hobbies.includes(option.value)}
                            />
                            {option.label}
                        </label>
                    ))}
                </div>
                <div>
                    <label>Role: </label>
                    <select name="role" value={formData.role} onChange={handleChange}>
                        <option value="">Select Role</option>
                        {roleOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </form>

            <div className="display-data" style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
                <h3>Entered Data:</h3>
                <p>Username: {formData.username}</p>
                <p>Firstname: {formData.firstname}</p>
                <p>Lastname: {formData.lastname}</p>
                <p>Gender: {formData.gender}</p>
                <p>Hobbies: {hobbies.join(", ")}</p>
                <p>Role: {formData.role}</p>
            </div>
        </div>
    );
};

export default Register;
