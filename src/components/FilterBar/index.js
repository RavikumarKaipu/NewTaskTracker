import React, { useState } from 'react';

const FilterBar = ({ onFilter }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div>
      <label>Filter by Status:</label>
      <select value={filter} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};

export default FilterBar;
