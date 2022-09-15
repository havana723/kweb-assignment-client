import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddButton from "../../components/AddButton";
import HeaderText from "../../components/HeaderText";
import Page from "../../components/Page";
import CourseResponse from "../../types/CourseResponse";
import { ErrorResponse } from "../../types/Error";

const CourseDetail: React.FC = (props) => {
  const params = useParams();

  const [course, setCourse] = useState<CourseResponse | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get<CourseResponse>("course", {
        params,
      })
      .then((res) => {
        setCourse(res.data);
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          alert((err.response?.data as ErrorResponse).error);
          navigate("/", { replace: true });
        }
      });
  }, [navigate, params]);

  return (
    <>
      <Page>
        {course ? (
          <>
            <HeaderText
              titleText={course.courseName}
              subTitleText={course.professorName}
            />
            <AddButton handleClick={() => navigate("new")} />
          </>
        ) : null}
      </Page>
    </>
  );
};

export default CourseDetail;
