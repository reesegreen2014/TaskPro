import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../store/slices/tasksSlice'

function Filter() {
  const dispatch = useDispatch();
  const currentFilter = useSelector(state => state.tasks.filter);

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value))
  }

  return (
    <div>
      <label htmlFor="filter">Filter Tasks:</label>
      <select id="filter" value={currentFilter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
      </select>
    </div>
  )
}

export default Filter
