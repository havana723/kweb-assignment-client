import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import hello from "../img/hello.png";

const Card = styled.div`
  width: 800px;
  max-width: 90vw;
  background: white;
  border-radius: 24px;
  padding-top: 4vh;
  padding-bottom: 4vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ImgDiv = styled.div`
  width: 200px;
  height: 200px;
  max-width: 60vw;
  max-height: 60vw;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Register = styled.div`
  width: 90%;
  text-align: right;
  font-weight: 700;
  color: #a57c7c;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginCard: React.FC = () => {
  return (
    <Card>
      <ImgDiv>
        <img
          src={hello}
          style={{ width: "80%", height: "80%", objectFit: "contain" }}
          alt="hello"
        />
      </ImgDiv>
      <InputContainer>
        <InputForm name="login">
          <Input type="text" name="username" placeholder="USERNAME" />
          <Input type="password" name="password" placeholder="PASSWORD" />
          <Submit type="submit" value="로그인" />
        </InputForm>
        <Link
          to="/register/student"
          style={{
            textDecoration: "none",
            alignSelf: "flex-end",
            marginRight: "5%",
          }}
        >
          <Register>가입하기 →</Register>
        </Link>
      </InputContainer>
    </Card>
  );
};

export default LoginCard;
