import React from 'react';
import './StudentCard.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';


function StudentCard({ id, name, city }) {
  const navigate = useNavigate();

  const deleteStudent = async (id) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_API_URL}/students/${id}`);
      toast.success(response?.data?.message || 'Deleted successfully');
      window.location.reload(); // Replace with parent state update ideally
    } catch (error) {
      console.error("Failed to delete employee:", error);
      toast.error("Failed to delete employee");
    }
  };

  return (
    <div
      className='student_card' onClick={() => navigate(`/detail/${id}`)}
     
    >
      <h3>{name}</h3>
      <div className='student-card-info'>
        <span className='card-id'><b>ID</b> : {id}</span>
        <span><b>City</b> : {city}</span>

        <span
          className='btn btn-primary'
          onClick={(e) => {
            e.stopPropagation();
            deleteStudent(id);
          }}
        >
          Delete
        </span>
        <span className="edit-btn btn btn-secondary" onClick={(e) => {  e.stopPropagation(); navigate(`/edit/${id}`) }}>
          Edit
        </span>
      </div>
    </div>
  );
}

export default StudentCard;
