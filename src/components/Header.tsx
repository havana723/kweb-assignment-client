import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { MdLogout, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import useWindowSize from "../hooks/useWindowSize";

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
  align-items: center;
  flex-direction: row;
  gap: 24px;
  font-size: 20pt;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 16px;
  font-size: 12pt;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  user-select: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

const MenuDrawerConatiner = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  right: -100%;
  top: 0;
  transition: transform 0.4s ease;
`;

const MenuDrawerBackground = styled.div`
  position: absolute;
  width: 280px;
  max-width: 90vw;
  height: 100%;
  padding-top: 72px;
  background: white;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: -4px 0px 4px rgba(0, 0, 0, 0.15);
  z-index: 400;
`;

const MenuDrawerContent = styled.div`
  width: 100%;
  height: 64px;
  padding-left: 24px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: black;
`;

const Header: React.FC = (props) => {
  const authContext = useContext(AuthContext);
  const user = authContext.currentUser;

  const [windowX] = useWindowSize();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Background>
        <Logo>
          <StyledLink to="/">
            <b>KU-LECTURE</b>
          </StyledLink>
          <Menu>
            {user ? (
              windowX >= 720 ? (
                <>
                  <StyledLink to="/courses">
                    <b>강의목록</b>
                  </StyledLink>
                  {user.role === "STUDENT" ? (
                    <StyledLink to="/recents">
                      <b>최근 활동</b>
                    </StyledLink>
                  ) : null}
                  <StyledLink to="/courses/my">
                    <b>내 강의</b>
                  </StyledLink>
                </>
              ) : null
            ) : null}
          </Menu>
        </Logo>
        <Menu>
          {user ? (
            <>
              <StyledLink to="/logout">
                <MdLogout fontSize="16pt" />
              </StyledLink>
              <MdMenu
                fontSize="16pt"
                onClick={() => setIsMenuOpen((p) => !p)}
              />
            </>
          ) : null}
        </Menu>
      </Background>
      {user ? (
        <MenuDrawerConatiner
          style={{ transform: isMenuOpen ? "translateX(-100%)" : undefined }}
        >
          <MenuDrawerBackground>
            <MenuDrawerContent>
              <StyledLink to="/courses">
                <b>강의목록</b>
              </StyledLink>
            </MenuDrawerContent>
            <MenuDrawerContent>
              {user.role === "STUDENT" ? (
                <StyledLink to="/recents">
                  <b>최근 활동</b>
                </StyledLink>
              ) : null}
            </MenuDrawerContent>
            <MenuDrawerContent>
              <StyledLink to="/courses/my">
                <b>내 강의</b>
              </StyledLink>
            </MenuDrawerContent>
            <MenuDrawerContent>
              <StyledLink to="/logout">
                <b>로그아웃</b>
              </StyledLink>
            </MenuDrawerContent>
          </MenuDrawerBackground>
        </MenuDrawerConatiner>
      ) : null}
    </>
  );
};

export default Header;
