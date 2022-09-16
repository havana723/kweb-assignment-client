import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddButton from "../../components/AddButton";
import HeaderText from "../../components/HeaderText";
import LectureList from "../../components/LectureList";
import Page from "../../components/Page";
import { AuthContext } from "../../contexts/AuthContext";
import CourseResponse from "../../types/CourseResponse";
import { ErrorResponse } from "../../types/Error";

const CourseDetail: React.FC = (props) => {
  const authContext = useContext(AuthContext);
  const user = authContext.currentUser;

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
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2vh" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  paddingRight: "2vh",
                }}
              >
                {authContext.currentUser?.role === "PROFESSOR" ? (
                  <AddButton handleClick={() => navigate("new")} />
                ) : undefined}
              </div>
              <LectureList lectures={course.lectures} />
            </div>
          </>
        ) : null}
      </Page>
    </>
  );
};

export default CourseDetail;
