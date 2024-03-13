import React from 'react';

const FilterStatus = ({ onFilterChange }) => {
  return (
    <div>
      <label>
        Filter by Status:
        <select onChange={(e) => onFilterChange(e.target.value)}  className="form-select">
          <option value="all">All</option>
          <option value="present">Present</option>
          <option value="absent">Absent</option>
          <option value="late">Late</option>
          <option value="sick">Sick</option>
        </select>
      </label>
    </div>
  );
};

export default FilterStatus;
