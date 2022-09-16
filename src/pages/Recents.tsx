import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderText from "../components/HeaderText";
import LectureList from "../components/LectureList";
import Page from "../components/Page";
import { ErrorResponse } from "../types/Error";
import LectureResponse from "../types/LectureResponse";

const Recents: React.FC = (props) => {
  const [lectures, setLectures] = useState<LectureResponse[] | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get<LectureResponse[]>("lecture/recents")
      .then((res) => {
        setLectures(res.data);
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
        <HeaderText titleText="최근 활동" />
        {lectures ? <LectureList lectures={lectures} /> : undefined}
      </Page>
    </>
  );
};

export default Recents;
