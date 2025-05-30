import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import './Home.css';
import StudentCard from '../../components/StudentCard/StudentCard';
import addIcon from './../../Assets/add.png';

function App() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const loadStudent = async () => {
    try {
      console.log('Loading student.....');
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/students`);
      setStudents(response.data.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    loadStudent();
  }, []);

  return (
    <div className='card-container'>
      <h1 className='app-heading'>Employee Data Store</h1>
      {students.length > 0 ? (
        students.map(({ id, name, city }) => (
          <StudentCard key={id} id={id} name={name} city={city} />
        ))
      ) : (
        <h1>No Students found</h1>
      )}
      <img src={addIcon} className='addIcon' alt='Add Icon' onClick={() => navigate('/add')} />
    </div>
  );
}

export default App;
5000