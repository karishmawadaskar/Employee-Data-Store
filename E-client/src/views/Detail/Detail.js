import React, { useEffect, useState } from 'react';
import './Detail.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Detail() {
  const [student, setStudent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadStudentDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/students/${id}`);
        setStudent(response.data.data);
      } catch (error) {
        console.error('Failed to load student:', error);
        setStudent(null);
      }
    };

    if (id) {
      loadStudentDetail();
    }
  }, [id]);

  //  Prevent crash by showing loading state
  if (!student) {
    return <h2>Loading student data...</h2>;
  }

  //  Only runs once student is not null
  return (
    <div className="employee-detail-wrapper">
  <h1 className="employee-heading">Employee Details</h1>
  <div className="employee-card">
    <div className="employee-image-section">
      <img src={student?.image || "https://via.placeholder.com/150"} alt="Employee" />
    </div>
    <div className="employee-info-section">
      <h2>{student?.name}</h2>
      <p><strong>ID:</strong> {student?.id}</p>
      <p><strong>City:</strong> {student?.city}</p>
      <p><strong>Age:</strong> {student?.age}</p>
      <p><strong>Blood Group:</strong> {student?.bloodGroup}</p>
      <p><strong>Role:</strong> {student?.post}</p>
      <p><strong>Gender:</strong> {student?.gender}</p>
      <p><strong>Birth Date:</strong> {student?.birthDate}</p>
      <p><strong>Email:</strong> {student?.email}</p>
    </div>
  </div>
</div>

  );
}

export default Detail;
