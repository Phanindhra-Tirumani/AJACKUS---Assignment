import React, {useState} from 'react'
import './App.css' // Global styles
import UserList from './components/UserList/UserList'
import UserForm from './components/UserForm/UserForm'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)

  const handleEditUser = user => {
    setCurrentUser(user)
  }

  const handleSaveUser = () => {
    setCurrentUser(null) // Refresh the user list after saving
  }

  const handleCancel = () => {
    setCurrentUser(null)
  }

  return (
    <div className="container">
      <h1>User Management Dashboard</h1>
      {currentUser ? (
        <UserForm
          user={currentUser}
          onSave={handleSaveUser}
          onCancel={handleCancel}
        />
      ) : (
        <UserList onEdit={handleEditUser} />
      )}
    </div>
  )
}

export default App
