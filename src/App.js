import React, { useState } from 'react';
import UserTable from './UserTable';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]
  
  //State
  const [users, setUsers] = useState(usersData)

  //Add users
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user])
  }
  //Delete users
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }

  //Edit Users
  const [ editing, setEditing ] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id:null, name:'', username:''
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id:user.id, name:user.name, username:user.username
    })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm currentUser={currentUser} updateUser={updateUser}/>
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
          users={users} 
          deleteUser={deleteUser} 
          editRow={editRow} />
        </div>
      </div>
    </div>
  )
}

export default App;