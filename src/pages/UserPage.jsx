import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserPage = () => {
  const { currentUser } = useAuth();
  const [profile, setProfile] = useState({
    name: currentUser?.name,
    email: currentUser?.email,
  });

  const [editMode, setEditMode] = useState(false);

  const handleSave = () => {
    setEditMode(false);
    // Simulate saving the profile (can integrate API here)
    alert("Profile updated successfully!");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h1 className="text-3xl font-bold mb-4">User Page</h1>
      <p className="mb-4">View and update your profile.</p>

      {!editMode ? (
        <div>
          <p>
            <span className="font-semibold">Name:</span> {profile.name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {profile.email}
          </p>
          <button
            onClick={() => setEditMode(true)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="border px-3 py-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
              className="border px-3 py-2 rounded w-full"
            />
          </div>
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save Changes
          </button>
        </div>
      )}

      <Link
        to="/"
        className="mt-6 inline-block bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default UserPage;

