import React, { useEffect, useState } from 'react';
 // Reusing the same styles
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import maleImage from './../../Assets/male.jpg';
import femaleImage from './../../Assets/female.webp';
import otherImage from './../../Assets/other.png';

function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    id: '',
    name: '',
    city: '',
    age: '',
    bloodGroup: '',
    post: '',
    gender: '',
    birthDate: '',
    email: '',
  });

  const [profileImage, setProfileImage] = useState('');

  const fetchEmployee = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/students/${id}`);
      setEmployee(response.data.data);

      // Set profile image based on gender
      const gender = response.data.data.gender;
      if (gender === 'Male') setProfileImage(maleImage);
      else if (gender === 'Female') setProfileImage(femaleImage);
      else setProfileImage(otherImage);
    } catch (e) {
      toast.error('Failed to load employee data');
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, [id]);

  const updateEmployee = async () => {
    const emptyField = Object.entries(employee).find(
      ([, value]) => value === '' || value === null || value === undefined
    );

    if (emptyField) {
      const [fieldName] = emptyField;
      toast.error(`Please fill in the "${fieldName}" field`);
      return;
    }

    try {
      const response = await axios.put(`http://localhost:5000/students/${id}`, {
        ...employee,
        image: profileImage,
      });

      toast.success(response.data.message || 'Employee updated successfully');

      setTimeout(() => {
        navigate('/');
      }, 1200);
    } catch (e) {
      toast.error(e?.response?.data?.message || 'Something went wrong!');
    }
  };

  const handleGenderChange = (e) => {
    const selectedGender = e.target.value;
    setEmployee({ ...employee, gender: selectedGender });

    if (selectedGender === 'Male') {
      setProfileImage(maleImage);
    } else if (selectedGender === 'Female') {
      setProfileImage(femaleImage);
    } else {
      setProfileImage(otherImage);
    }
  };

  return (
    <div className="add-container">
      <h1>Edit Employee</h1>

      {profileImage && (
        <div className="profile-preview">
          <img src={profileImage} alt="Profile Preview" className="profile-img" />
        </div>
      )}

      <div className="form-group">
        <input
          type="text"
          placeholder="ID"
          value={employee.id}
          readOnly
          className="user-input"
        />
        <input
          type="text"
          placeholder="Name"
          value={employee.name}
          onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
          className="user-input"
        />
        <input
          type="text"
          placeholder="City"
          value={employee.city}
          onChange={(e) => setEmployee({ ...employee, city: e.target.value })}
          className="user-input"
        />
        <input
          type="number"
          placeholder="Age"
          value={employee.age}
          onChange={(e) => setEmployee({ ...employee, age: e.target.value })}
          className="user-input"
        />
        <input
          type="text"
          placeholder="Blood Group"
          value={employee.bloodGroup}
          onChange={(e) => setEmployee({ ...employee, bloodGroup: e.target.value })}
          className="user-input"
        />
        <input
          type="text"
          placeholder="Post"
          value={employee.post}
          onChange={(e) => setEmployee({ ...employee, post: e.target.value })}
          className="user-input"
        />
        <select
          value={employee.gender}
          onChange={handleGenderChange}
          className="user-input"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="date"
          placeholder="Birth Date"
          value={employee.birthDate}
          onChange={(e) => setEmployee({ ...employee, birthDate: e.target.value })}
          className="user-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={employee.email}
          onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
          className="user-input"
        />
      </div>

      <div className="btn-group">
        <button type="button" className="btn2 btn-primary" onClick={updateEmployee}>
          Update Employee
        </button>
        <button type="button" className="btn2 btn-secondary" onClick={() => navigate('/')}>
          Home
        </button>
      </div>

      <Toaster
        toastOptions={{
          style: {
            fontSize: '14px',
            padding: '10px 16px',
            maxWidth: '250px',
          },
        }}
      />
    </div>
  );
}

export default Edit;
