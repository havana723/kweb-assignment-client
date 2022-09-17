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
import CourseDetail from "./pages/course/CourseDetail";
import CourseListPage from "./pages/course/CourseList";
import CourseMy from "./pages/course/courseMy";
import CourseNew from "./pages/course/CourseNew";
import CourseRegister from "./pages/course/CourseRegister";
import LectureDetail from "./pages/course/lecture/LectureDetail";
import LectureNew from "./pages/course/lecture/LectureNew";
import CourseStudent from "./pages/course/student/CourseStudent";
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import Recents from "./pages/Recents";
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
            <Route path="list" element={<CourseListPage />} />
            <Route path="my" element={<CourseMy />} />
            <Route path="new" element={<CourseNew />} />
            <Route path=":courseId">
              <Route index element={<CourseDetail />} />
              <Route path="new" element={<LectureNew />} />
              <Route path="register" element={<CourseRegister />} />
              <Route path="student" element={<CourseStudent />} />
              <Route path=":lectureId" element={<LectureDetail />} />
            </Route>
          </Route>
          <Route path="logout" element={<Logout />} />
          <Route path="recents" element={<Recents />} />
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
