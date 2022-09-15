import styled from "@emotion/styled";
import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import LectureResponse from "../types/LectureResponse";

interface Props {
  lectures: LectureResponse[];
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
  width: 360px;
  max-width: 70vw;
  font-size: 20px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SubTitleContainer = styled.div`
  height: 40px;
  width: 400px;
  max-width: 80vw;
  display: flex;
  align-items: center;
`;

const SubTitleText = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #a57c7c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const LectureList: React.FC<Props> = (props) => {
  const { lectures } = props;
  const navigate = useNavigate();

  return (
    <>
      <CardContainer>
        {lectures.length > 0 ? (
          lectures.map((l) => (
            <Card
              key={l.courseId}
              onClick={() => navigate(`/course/${l.courseId}/${l.id}`)}
            >
              <TitleContainer>
                <TitleText>{`${l.lectureTitle}`}</TitleText>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <MdArrowForward fontSize="16pt" />
                </div>
              </TitleContainer>
              <SubTitleContainer>
                <SubTitleText>{l.lectureContent}</SubTitleText>
              </SubTitleContainer>
            </Card>
          ))
        ) : (
          <>
            <div style={{ height: "4vh" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "gray",
                fontWeight: "500",
                fontSize: "16px",
              }}
            >
              강의 게시물이 존재하지 않습니다.
            </div>
          </>
        )}
      </CardContainer>
    </>
  );
};

export default LectureList;
