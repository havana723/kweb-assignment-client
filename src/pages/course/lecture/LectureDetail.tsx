import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderText from "../../../components/HeaderText";
import LectureDisplay from "../../../components/LectureDisplay";
import Page from "../../../components/Page";
import { ErrorResponse } from "../../../types/Error";
import LectureResponse from "../../../types/LectureResponse";

const LectureDetail: React.FC = (props) => {
  const params = useParams();

  const [lecture, setLecture] = useState<LectureResponse | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get<LectureResponse>("lecture", {
        params,
      })
      .then((res) => {
        setLecture(res.data);
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
        {lecture ? (
          <>
            <HeaderText
              titleText={lecture.lectureTitle}
              subTitleText={lecture.courseName ?? lecture.courseId}
            />
            <LectureDisplay lectureContent={lecture.lectureContent} />
          </>
        ) : null}
      </Page>
    </>
  );
};

export default LectureDetail;
