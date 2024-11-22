import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const AdminPage = () => {
  const { users, createUser, updateUser, deleteUser } = useAuth();
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "", role: "user" });
  const [isEditing, setIsEditing] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateUser(editUser); // Update user if in edit mode
    } else {
      createUser(newUser); // Create new user if in create mode
    }
    setNewUser({ name: "", email: "", password: "", role: "user" }); // Reset form
    setIsEditing(false);
    setEditUser(null);
  };

  const handleEdit = (user) => {
    setNewUser({ name: user.name, email: user.email, password: user.password, role: user.role });
    setIsEditing(true);
    setEditUser(user);
  };

  const handleDelete = (email) => {
    deleteUser(email); // Delete the user by email
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <form onSubmit={handleSubmit} className="mt-6">
        <h2 className="text-xl mb-4">{isEditing ? "Edit User" : "Create New User"}</h2>
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-2 border mb-2"
          required
        />
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border mb-2"
          required
        />
        <input
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-2 border mb-2"
          required
        />
        <select
          name="role"
          value={newUser.role}
          onChange={handleChange}
          className="w-full p-2 border mb-2"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          {isEditing ? "Update User" : "Create User"}
        </button>
      </form>

      <h2 className="text-xl mt-8">Users List</h2>
      <table className="mt-4 w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Role</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border">{user.name}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">{user.role}</td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() => handleEdit(user)}
                  className="bg-yellow-500 text-white p-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.email)}
                  className="bg-red-500 text-white p-1 rounded ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
