import HeaderText from "../../components/HeaderText";
import Page from "../../components/Page";
import RegisterCard from "../../components/RegisterCard";

const RegisterStudent: React.FC = (props) => {
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
