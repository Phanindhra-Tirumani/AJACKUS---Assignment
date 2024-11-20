import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './UserList.css' // Specific styles for UserList

const UserList = ({onEdit}) => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(e => setError('Failed to fetch users'))
  }, [])

  const handleDelete = id => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id))
      })
      .catch(e => setError('Failed to delete user'))
  }

  return (
    <div className='user-list-container'>
      {error && <div className='error'>{error}</div>}
      <h3>User List</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <span>
              {user.name} ({user.email})
            </span>
            <div>
              <button type='button' onClick={() => onEdit(user)}>
                Edit
              </button>
              <button type='button' onClick={() => handleDelete(user.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
