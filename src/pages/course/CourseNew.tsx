import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderText from "../../components/HeaderText";
import NewCourseCard from "../../components/NewCourseCard";
import Page from "../../components/Page";
import { AuthContext } from "../../contexts/AuthContext";

const CourseNew: React.FC = (props) => {
  const authContext = useContext(AuthContext);
  const user = authContext.currentUser;

  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role !== "PROFESSOR") {
      alert("권한이 없습니다.");
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  return (
    <>
      <Page>
        <HeaderText titleText="강의 등록" />
        <NewCourseCard />
      </Page>
    </>
  );
};

export default CourseNew;
