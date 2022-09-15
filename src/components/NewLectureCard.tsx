import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { ErrorResponse } from "../types/Error";
import "./newLectureCard.css";

interface Props {
  courseId: string;
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

const InputForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2vh;
`;

const Input = styled.input`
  width: 680px;
  max-width: 80vw;
  height: 36px;
  background-color: white;
  font: inherit;
  font-weight: 500;
  border: 1px solid #b0b0b0;
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

const NewLectureCard: React.FC<Props> = (props) => {
  const [value, setValue] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const courseId = props.courseId;

  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    axios
      .post("/lecture", {
        courseId,
        lectureTitle: title,
        lectureContent: value,
      })
      .then((res) => {
        alert("게시물 등록에 성공하였습니다!");
        navigate(`/course/${courseId}/${res.data.lectureId}`);
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          alert((err.response?.data as ErrorResponse).error);
        }
      });
  };

  const modules = {
    toolbar: [
      //[{ 'font': [] }],
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      [{ align: [] }, { color: [] }, { background: [] }],
      ["clean"],
    ],
  };

  const formats = [
    //'font',
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  return (
    <Card>
      <InputForm onSubmit={handleSubmit}>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <ReactQuill
          style={{
            width: "680px",
            maxWidth: "80vw",
            display: "flex",
            flexDirection: "column",
          }}
          theme="snow"
          modules={modules}
          formats={formats}
          value={value}
          onChange={setValue}
        />
        <Submit type="submit" value="등록하기" />
      </InputForm>
    </Card>
  );
};

export default NewLectureCard;
