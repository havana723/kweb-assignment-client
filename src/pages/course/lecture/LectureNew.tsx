import { useParams } from "react-router-dom";
import HeaderText from "../../../components/HeaderText";
import NewLectureCard from "../../../components/NewLectureCard";
import Page from "../../../components/Page";

const CourseNew: React.FC = () => {
  const params = useParams();
  const courseId = params.courseId;

  return (
    <>
      <Page>
        {courseId ? (
          <>
            <HeaderText titleText={courseId} subTitleText="강의 게시물 작성" />
            <NewLectureCard />
          </>
        ) : null}
      </Page>
    </>
  );
};

export default CourseNew;
