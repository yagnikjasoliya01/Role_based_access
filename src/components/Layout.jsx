import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Layout = ({ children }) => {
  const { currentUser, logout } = useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <Link to="/">Role-Based App</Link>
          </h1>
          <nav className="flex space-x-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/admin" className="hover:underline">
              Admin
            </Link>
            <Link to="/user" className="hover:underline">
              User
            </Link>
            {!currentUser ? (
              <Link to="/login" className="hover:underline">
                Login
              </Link>
            ) : (
              <button
                onClick={logout}
                className="hover:underline"
              >
                Logout
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Role-Based App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

