import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Role-Based App</h1>
      {currentUser ? (
        <>
          <p className="mb-4">
            Hello, <span className="font-semibold">{currentUser.name}</span>!
          </p>
          <p>
            You are logged in as a{" "}
            <span className="font-semibold">{currentUser.role}</span>.
          </p>
        </>
      ) : (
        <p className="mb-4">Please log in to access your account.</p>
      )}
      <div className="mt-6 space-x-4">
        <Link
          to="/admin"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Admin Dashboard
        </Link>
        <Link
          to="/user"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          User Page
        </Link>
      </div>
    </div>
  );
};

export default Home;
