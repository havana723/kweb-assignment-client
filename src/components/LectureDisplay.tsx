import styled from "@emotion/styled";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import "./newLectureCard.css";

interface Props {
  lectureContent: string;
}

const Card = styled.div`
  width: 720px;
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

const LectureDisplay: React.FC<Props> = (props) => {
  const value = props.lectureContent;

  return (
    <Card>
      <ReactQuill
        style={{
          width: "680px",
          maxWidth: "80vw",
          display: "flex",
          flexDirection: "column",
        }}
        modules={{}}
        theme="bubble"
        value={value}
        readOnly={true}
      />
    </Card>
  );
};

export default LectureDisplay;
