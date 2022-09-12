import { useContext } from "react";
import HeaderTextMain from "../components/HeaderTextMain";
import LoginCard from "../components/LoginCard";
import Page from "../components/Page";
import { AuthContext } from "../contexts/AuthContext";

const Home: React.FC = (props) => {
  const authContext = useContext(AuthContext);
  const user = authContext.currentUser;

  return (
    <>
      <Page>
        <HeaderTextMain titleText={user ? user.username : undefined} />
        {user ? null : <LoginCard />}
      </Page>
    </>
  );
};

export default Home;
