import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([
    { email: "admin@example.com", password: "admin123", name: "Admin", role: "admin" },
    { email: "user@example.com", password: "user123", name: "User", role: "user" },
  ]);

  // Load current user from localStorage when the app loads
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  const login = async (email, password) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) throw new Error("Invalid credentials");

    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user)); // Store logged-in user in localStorage
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser"); // Remove user from localStorage on logout
  };

  const signUp = async (newUser) => {
    const existingUser = users.find((u) => u.email === newUser.email);
    if (existingUser) throw new Error("User already exists");

    // Add new user to users array and set them as the current user
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setCurrentUser(newUser);
    localStorage.setItem("currentUser", JSON.stringify(newUser)); // Store new user in localStorage
  };

  // CRUD Operations for Admin
  const createUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const updateUser = (updatedUser) => {
    setUsers((prevUsers) => prevUsers.map((user) => (user.email === updatedUser.email ? updatedUser : user)));
  };

  const deleteUser = (email) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.email !== email));
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, signUp, createUser, updateUser, deleteUser, users }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
