import styled from "@emotion/styled";
import { MdPersonRemove } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import UserResponse from "../types/UserResponse";
import CircleButton from "./CircleButton";

interface Props {
  students: UserResponse[];
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
  const { students } = props;
  const navigate = useNavigate();

  return (
    <>
      <CardContainer>
        {students.length > 0 ? (
          students.map((s) => (
            <Card key={s.uniqueId}>
              <TitleContainer>
                <TitleText>{s.name}</TitleText>
                <CircleButton
                  handleClick={() => {}}
                  icon={<MdPersonRemove fontSize="16pt" />}
                />
              </TitleContainer>
              <SubTitleContainer>
                <SubTitleText>{s.uniqueId}</SubTitleText>
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
              수강 학생이 존재하지 않습니다.
            </div>
          </>
        )}
      </CardContainer>
    </>
  );
};

export default LectureList;
