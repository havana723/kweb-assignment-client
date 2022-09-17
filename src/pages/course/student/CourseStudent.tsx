import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderText from "../../../components/HeaderText";
import Page from "../../../components/Page";
import StudentList from "../../../components/StudentList";
import { ErrorResponse } from "../../../types/Error";
import UserResponse from "../../../types/UserResponse";

const CourseDetail: React.FC = (props) => {
  const params = useParams();

  const [students, setStudents] = useState<UserResponse[] | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get<UserResponse[]>("course/student", {
        params,
      })
      .then((res) => {
        setStudents(res.data);
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
        {students ? (
          <>
            <HeaderText
              titleText={params.courseId ?? ""}
              subTitleText="수강 학생 조회"
            />
            <StudentList students={students} />
          </>
        ) : null}
      </Page>
    </>
  );
};

export default CourseDetail;
