import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RegisterProfessor from "./pages/register/RegisterProfessor";
import RegisterStudent from "./pages/register/RegisterStudent";

axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register">
          <Route path="student" element={<RegisterStudent />} />
          <Route path="professor" element={<RegisterProfessor />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
