import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseList from "../../components/CourseList";
import HeaderText from "../../components/HeaderText";
import Page from "../../components/Page";
import CourseResponse from "../../types/CourseResponse";
import { ErrorResponse } from "../../types/Error";

const CourseListPage: React.FC = (props) => {
  const [courses, setCourses] = useState<CourseResponse[] | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get<CourseResponse[]>("course/list")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          alert((err.response?.data as ErrorResponse).error);
          navigate("/", { replace: true });
        }
      });
  }, [navigate]);

  return (
    <>
      <Page>
        <HeaderText titleText="강의 목록" />
        <CourseList courses={courses ?? []} isFullList={true} />
      </Page>
    </>
  );
};

export default CourseListPage;
