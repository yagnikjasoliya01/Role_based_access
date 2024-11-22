import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import Unauthorized from "./pages/Unauthorized";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute roles={["admin"]}>
                  <AdminPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user"
              element={
                <ProtectedRoute roles={["user", "admin"]}>
                  <UserPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
