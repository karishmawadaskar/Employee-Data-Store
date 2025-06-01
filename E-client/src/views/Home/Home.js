import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import './Home.css';
import StudentCard from '../../components/StudentCard/StudentCard';
import addIcon from './../../Assets/add.png';

function App() {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();

  const loadEmployee = async () => {
    try {
      console.log('Loading employee.....');
      const response = await axios.get('https://employee-data-store.onrender.com/students');
      setEmployee(response.data.data);
    } catch (error) {
      console.error('Error fetching employee:', error);
    }
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  return (
    <div className='card-container'>
      <h1 className='app-heading'>Employee Data Store</h1>
      {employee.length > 0 ? (
        employee.map(({ id, name, city }) => (
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
