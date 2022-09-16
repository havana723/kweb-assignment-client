import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ErrorResponse } from "../../types/Error";

const CourseRegister: React.FC = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    axios
      .post("/course/register", {
        courseId: params.courseId,
      })
      .then((res) => {
        alert("수강신청에 성공하였습니다!");
        navigate(-1);
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          alert((err.response?.data as ErrorResponse).error);
          navigate(-1);
        }
      });
  }, [authContext, navigate, params.courseId]);

  return null;
};

export default CourseRegister;
