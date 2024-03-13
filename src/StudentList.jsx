import React from 'react';

const StudentList = ({ students, onDeleteStudent, onUpdateStatus }) => {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.length > 0 ? (
          students.map((student) => (
            <li key={student.id} className="alert alert-primary d-flex justify-content-between">
              {student.name} - {student.status}
              <button onClick={() => onDeleteStudent(student.id)} className="btn btn-primary">Delete</button>
              <button onClick={() => onUpdateStatus(student.id)} className="btn btn-primary">Update Status</button>
            </li>
          ))
        ) : (
          <p>No Students in the List</p>
        )}
      </ul>
    </div>
  );
};

export default StudentList;
