import axios from "axios";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import { AuthContext } from "./contexts/AuthContext";
import CourseNew from "./pages/course/CourseNew";
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import RegisterProfessor from "./pages/register/RegisterProfessor";
import RegisterStudent from "./pages/register/RegisterStudent";
import UserResponse from "./types/UserResponse";

axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;
axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState<UserResponse | null>(null);

  const refetchProfile = () => {
    axios
      .get("/auth/verify")
      .then((res) => {
        setUser(res.data);
      })
      .catch((res) => setUser(null));
  };
  const logout = () => {
    window.location.href = "/logout";
  };

  useEffect(refetchProfile, []);

  const authContextValue = {
    currentUser: user,
    refetchProfile,
    logout,
  };

  return (
    <Router>
      <AuthContext.Provider value={authContextValue}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="course">
            <Route path="new" element={<CourseNew />} />
          </Route>
          <Route path="logout" element={<Logout />} />
          <Route path="register">
            <Route path="student" element={<RegisterStudent />} />
            <Route path="professor" element={<RegisterProfessor />} />
            <Route index element={<Navigate to="/register/student" />} />
          </Route>
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
