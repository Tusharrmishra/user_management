import React, { useState, useEffect } from "react";
import UserListContainer from "./components/UserList";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  const handleSaveUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setEditingUser(null);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>User Management</h1>
      {editingUser ? (
        <EditUserForm user={editingUser} onSave={handleSaveUser} />
      ) : (
        <AddUserForm onAdd={handleAddUser} />
      )}
      <UserListContainer
        users={users}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
      />
    </div>
  );
};

export default App;
