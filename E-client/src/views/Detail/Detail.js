import React, { useEffect, useState } from 'react';
import './Detail.css';
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';

function Detail() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadEmployeeDetail = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/students/${id}`);
        setEmployee(response.data.data);
      } catch (error) {
        console.error('Failed to load employee:', error);
        setEmployee(null);
      }
    };

    if (id) {
      loadEmployeeDetail();
    }
  }, [id]);

  //  Prevent crash by showing loading state
  if (!employee) {
    return <h2>Loading employee data...</h2>;
  }

  //  Only runs once student is not null
  return (
    <div className="employee-detail-wrapper">
      <h1 className="employee-heading">Employee Details</h1>
      <div className="employee-card">
        <div className="employee-image-section">
          <img src={employee?.image || "https://via.placeholder.com/150"} alt="Employee" />
        </div>
        <div className="employee-info-section">
          <h2>{employee?.name}</h2>
          <p><strong>ID:</strong> {employee?.id}</p>
          <p><strong>City:</strong> {employee?.city}</p>
          <p><strong>Age:</strong> {employee?.age}</p>
          <p><strong>Blood Group:</strong> {employee?.bloodGroup}</p>
          <p><strong>Role:</strong> {employee?.post}</p>
          <p><strong>Gender:</strong> {employee?.gender}</p>
          <p><strong>Birth Date:</strong> {employee?.birthDate}</p>
          <p><strong>Email:</strong> {employee?.email}</p>
        </div>
        <button type="button" className="btn2 btn-secondary" onClick={() => navigate('/')}>
          Home
        </button>
      </div>
    </div>

  );
}

export default Detail;
