import styled from "@emotion/styled";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #980000;
  width: 100%;
  height: 48px;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
  z-index: 500;
`;

const Logo = styled.div`
  font-weight: 900;
  display: flex;
  justify-content: space-around;
  font-size: 20pt;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Header: React.FC = (props) => {
  return (
    <>
      <Background>
        <Logo>
          <b>KU-LECTURE</b>
        </Logo>
        <Menu></Menu>
      </Background>
    </>
  );
};

export default Header;
