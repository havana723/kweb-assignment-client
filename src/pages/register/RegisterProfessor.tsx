import HeaderText from "../../components/HeaderText";
import Page from "../../components/Page";
import RegisterCard from "../../components/RegisterCard";

const RegisterProfessor: React.FC = (props) => {
  return (
    <>
      <Page>
        <HeaderText titleText="교수자 가입하기" subTitleText="" />
        <RegisterCard role="PROFESSOR" />
      </Page>
    </>
  );
};

export default RegisterProfessor;
