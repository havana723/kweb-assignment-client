import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderText from "../../components/HeaderText";
import Page from "../../components/Page";
import RegisterCard from "../../components/RegisterCard";
import { AuthContext } from "../../contexts/AuthContext";

const RegisterStudent: React.FC = (props) => {
  const authContext = useContext(AuthContext);
  const user = authContext.currentUser;

  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  return (
    <>
      <Page>
        <HeaderText titleText="학생 가입하기" subTitleText="" />
        <RegisterCard role="STUDENT" />
      </Page>
    </>
  );
};

export default RegisterStudent;
