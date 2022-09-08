import styled from "@emotion/styled";

interface Props {
  titleText?: string;
}

const HeaderTextContainter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const TitleText = styled.div`
  font-weight: 900;
  font-size: min(3rem, 10vw);
  color: #980000;
  text-transform: uppercase;
`;

const SubTitleText = styled.div`
  width: 90vw;
  font-weight: 700;
  font-size: min(1rem, 3vw);
  color: #a57c7c;
  word-break: keep-all;
`;

const HeaderTextMain: React.FC<Props> = (props) => {
  return (
    <>
      <HeaderTextContainter>
        <TitleText>Hello,</TitleText>
        <TitleText>KU-LECTURE</TitleText>
        <div style={{ height: "2vh" }} />
        <SubTitleText>
          KU-LECTURE는 고려대학교 학생들과 교수자들을 위한 강의 관리
          시스템입니다.
        </SubTitleText>
      </HeaderTextContainter>
    </>
  );
};

export default HeaderTextMain;
