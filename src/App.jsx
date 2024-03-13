import React, { useState } from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import FilterStatus from './FilterStatus';

const App = () => {
  const [students, setStudents] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');

  const addStudent = (student) => {
    setStudents([...students, { id: Date.now(), ...student }]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const updateStatus = (id) => {
    const updatedStudents = students.map((student) =>
      student.id === id
        ? { ...student, status: prompt('Enter new status:', student.status) }
        : student
    );

    // Check if the entered status is valid
    const isValidStatus = updatedStudents.every((student) =>
      ['present', 'absent', 'late', 'sick'].includes(student.status)
    );

    if (isValidStatus) {
      setStudents(updatedStudents);
    } else {
      alert('Invalid status! Please enter a valid status (present, absent, late, or sick).');
    }
  };

  const filterStudents = () => {
    if (filterStatus === 'all') {
      return students;
    }
    return students.filter((student) => student.status === filterStatus);
  };

  return (
    <div>
      <h1 className="animate-charcter">Class Attendance System</h1>
      <StudentForm onAddStudent={addStudent}  />
      <FilterStatus onFilterChange={setFilterStatus} />
      <StudentList students={filterStudents()} onDeleteStudent={deleteStudent} onUpdateStatus={updateStatus} />
    </div>
  );
};

export default App;
