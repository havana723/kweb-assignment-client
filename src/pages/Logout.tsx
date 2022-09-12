import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Logout: React.FC = (props) => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("/auth/logout")
      .then((res) => {
        authContext.refetchProfile();
        alert("로그아웃 되었습니다.");
        navigate("/", { replace: true });
      })
      .catch();
  }, [authContext, navigate]);

  return null;
};

export default Logout;
