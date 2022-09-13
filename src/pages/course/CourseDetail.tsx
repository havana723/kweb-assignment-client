import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderText from "../../components/HeaderText";
import Page from "../../components/Page";
import { AuthContext } from "../../contexts/AuthContext";

const CourseDetail: React.FC = (props) => {
  const authContext = useContext(AuthContext);
  const user = authContext.currentUser;

  const params = useParams();

  const navigate = useNavigate();

  return (
    <>
      <Page>
        <HeaderText titleText={params.courseId ?? ""} />
      </Page>
    </>
  );
};

export default CourseDetail;
