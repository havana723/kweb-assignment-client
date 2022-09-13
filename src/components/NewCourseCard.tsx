import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorResponse } from "../types/Error";

const Card = styled.div`
  width: 480px;
  max-width: 90vw;
  background: white;
  border-radius: 24px;
  padding-top: 4vh;
  padding-bottom: 4vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;

const InputForm = styled.form`
  width: 400px;
  max-width: 80vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4vh;
`;

const Input = styled.input`
  width: 90%;
  height: 36px;
  background-color: white;
  font: inherit;
  font-weight: 700;
  border: 1px solid #a57c7c;
  border-radius: 12px;
  padding-left: 2vh;

  &::placeholder {
    color: #a57c7c;
    font-weight: 700;
  }
`;

const Submit = styled(Input)`
  background-color: #980000;
  color: white;
  font: inherit;
  font-weight: 700;
  padding: 0;
`;

const NewCourseCard: React.FC = () => {
  const [courseName, setCourseName] = useState<string>("");
  const [courseId, setCourseId] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    axios
      .post<{ courseId: string }>("course/post", {
        courseName,
        courseId,
      })
      .then((res) => {
        alert("강의 개설에 성공하였습니다!");
        navigate(`/course/${res.data.courseId}`);
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          alert((err.response?.data as ErrorResponse).error);
        }
      });
  };

  return (
    <Card>
      <InputContainer>
        <InputForm onSubmit={handleSubmit}>
          <Input
            type="text"
            name="courseName"
            placeholder="COURSE NAME"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
            pattern="^[a-zA-Z0-9가-힣]{4,32}$"
            title="강의명은 공백을 포함할 수 없으며 영문 또는 한글 또는 숫자로 이루어진 4글자에서 32글자 사이의 조합이어야 합니다."
          />
          <Input
            type="courseId"
            name="courseId"
            placeholder="COURSE ID"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            required
            pattern="^[A-Z]{4}-[0-9]{3}$"
            title="학수번호는 대문자 알파벳 네 글자, '-', 그리고 숫자 세 글자로 이루어진 10글자 조합이어야 합니다."
          />
          <Submit type="submit" value="등록하기" />
        </InputForm>
      </InputContainer>
    </Card>
  );
};

export default NewCourseCard;
