import styled from "@emotion/styled";
import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import CourseResponse from "../types/CourseResponse";

interface Props {
  courses: CourseResponse[];
}

const CardContainer = styled.div`
  width: 480px;
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  gap: 4vh;
`;

const Card = styled.div`
  width: 480px;
  max-width: 90vw;
  height: 160px;
  background: white;
  border-radius: 24px;
  padding-top: 4vh;
  padding-bottom: 4vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const TitleContainer = styled.div`
  height: 40px;
  width: 400px;
  max-width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TitleText = styled.div`
  font-size: min(1.5rem, 6vw);
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const SubTitleContainer = styled.div`
  height: 40px;
  width: 400px;
  max-width: 80vw;
  display: flex;
  align-items: center;
`;

const SubTitleText = styled.div`
  font-size: min(1.3rem, 5vw);
  font-weight: 700;
  color: #a57c7c;
  display: flex;
  align-items: center;
`;

const CourseList: React.FC<Props> = (props) => {
  const courses = props.courses;
  const navigate = useNavigate();

  return (
    <>
      <CardContainer>
        {courses.map((c) => (
          <Card
            key={c.courseId}
            onClick={() => navigate(`/course/${c.courseId}`)}
          >
            <TitleContainer>
              <TitleText>{`[${c.courseId}] ${c.courseName}`}</TitleText>
              <TitleText>
                <MdArrowForward fontSize="16pt" />
              </TitleText>
            </TitleContainer>
            <SubTitleContainer>
              <SubTitleText>{c.professorName}</SubTitleText>
            </SubTitleContainer>
          </Card>
        ))}
      </CardContainer>
    </>
  );
};

export default CourseList;