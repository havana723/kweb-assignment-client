import HeaderTextMain from "../components/HeaderTextMain";
import LoginCard from "../components/LoginCard";
import Page from "../components/Page";

const Home: React.FC = (props) => {
  return (
    <>
      <Page>
        <HeaderTextMain />
        <LoginCard />
      </Page>
    </>
  );
};

export default Home;
