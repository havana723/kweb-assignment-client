import styled from "@emotion/styled";
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
      <InputForm name="login">
        <Input type="text" name="username" placeholder="USERNAME" />
        <Input type="text" name="password" placeholder="PASSWORD" />
        <Submit type="submit" value="로그인" />
      </InputForm>
    </Card>
  );
};

export default LoginCard;
