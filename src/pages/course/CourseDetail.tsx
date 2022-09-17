import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MdOutlineAdd, MdPerson } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import CircleButton from "../../components/CircleButton";
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
                  gap: "8px",
                }}
              >
                {user?.role === "PROFESSOR" ? (
                  <>
                    <CircleButton
                      handleClick={() => navigate("student")}
                      icon={<MdPerson fontSize="16pt" />}
                    />
                    <CircleButton
                      handleClick={() => navigate("new")}
                      icon={<MdOutlineAdd fontSize="16pt" />}
                    />
                  </>
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
