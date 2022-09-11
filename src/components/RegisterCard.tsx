import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ErrorResponse } from "../types/Error";

interface Props {
  role: "STUDENT" | "PROFESSOR";
}

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

const ChangeRole = styled.div`
  width: 90%;
  text-align: right;
  font-weight: 700;
  color: #a57c7c;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`;

const RegisterCard: React.FC<Props> = (props) => {
  const role = props.role;

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [uniqueId, setUniqueId] = useState<string>("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    axios
      .post("auth/register", {
        username,
        password,
        name,
        uniqueId,
        role,
      })
      .then((res) => {
        alert("회원 가입에 성공하였습니다!");
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
            name="username"
            placeholder="USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            pattern="^[a-z0-9]{4,32}$"
            title="아이디는 숫자 또는 영문자로 이루어진 8글자에서 32글자 사이의 조합이어야 합니다."
          />
          <Input
            type="password"
            name="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            pattern="^([a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,32}$"
            title="비밀번호는 숫자+영문자+특수문자로 이루어진 8글자에서 32글자 사이의 조합이어야 합니다."
          />
          <Input
            type="text"
            name="name"
            placeholder="NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="text"
            name="uniqueId"
            placeholder={role === "STUDENT" ? "STUDENT ID" : "PROFESSOR ID"}
            value={uniqueId}
            onChange={(e) => setUniqueId(e.target.value)}
            required
            pattern="^[0-9]{10}$"
            title="학번/교번은 10글자 숫자 형식이어야 합니다."
          />
          <Submit type="submit" value="가입하기" />
        </InputForm>
        <Link
          to={role === "STUDENT" ? "/register/professor" : "/register/student"}
          style={{
            textDecoration: "none",
            alignSelf: "flex-end",
            marginRight: "5%",
          }}
        >
          <ChangeRole>
            {role === "STUDENT" ? "교수자 가입하기 →" : "학생 가입하기 →"}
          </ChangeRole>
        </Link>
      </InputContainer>
    </Card>
  );
};

export default RegisterCard;
