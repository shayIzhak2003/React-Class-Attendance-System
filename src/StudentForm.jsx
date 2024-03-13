import React, { useState } from 'react';

const StudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('present');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Please enter a student name');
      return;
    }
    onAddStudent({ name, status });
    setName('');
    setStatus('present');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
      </label>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="form-select">
          <option value="present">Present</option>
          <option value="absent">Absent</option>
          <option value="late">Late</option>
          <option value="sick">Sick</option>
        </select>
      </label>
      <button type="submit" className="btn btn-success ms-1 ">Add Student</button>
    </form>
  );
};

export default StudentForm;