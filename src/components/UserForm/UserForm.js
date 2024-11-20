import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './UserForm.css' // Specific styles for UserForm

const UserForm = ({user, onSave, onCancel}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
  })
  const [error, setError] = useState(null)

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        department: user.department || '',
      })
    }
  }, [user])

  const handleInputChange = e => {
    const {name, value} = e.target
    setFormData(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.department) {
      setError('All fields are required')
      return
    }

    const apiMethod = user ? axios.put : axios.post
    const url = user
      ? `https://jsonplaceholder.typicode.com/users/${user.id}`
      : 'https://jsonplaceholder.typicode.com/users'

    apiMethod(url, {...formData, id: user ? user.id : undefined})
      .then(response => {
        onSave(response.data)
      })
      .catch(err => setError('Failed to save user'))
  }

  return (
    <div className="user-form-container">
      {error && <div className="error">{error}</div>}
      <h3>{user ? 'Edit User' : 'Add New User'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleInputChange}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  )
}

export default UserForm
