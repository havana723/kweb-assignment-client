import styled from "@emotion/styled";

interface Props {
  titleText: string;
  subTitleText?: string;
  subTitleOnClick?: () => void;
}

const HeaderTextContainter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  user-select: none;
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

const HeaderText: React.FC<Props> = (props) => {
  const { titleText, subTitleText, subTitleOnClick } = props;
  return (
    <>
      <HeaderTextContainter>
        <TitleText>{titleText}</TitleText>
        <div style={{ height: "2vh" }} />
        {subTitleText ? (
          <SubTitleText onClick={subTitleOnClick}>{subTitleText}</SubTitleText>
        ) : null}
      </HeaderTextContainter>
    </>
  );
};

export default HeaderText;
