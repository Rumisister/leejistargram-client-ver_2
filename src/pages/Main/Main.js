import Nav from "../../../components/Nav/Nav";
import Feed from "./Feed/Feed";
import MainRight from "../Main/MainRight/MainRight";

import "./Main.scss";

const Main = () => {
  return (
    <>
      <Nav />
      <main>
        <div>
          <Feed />
        </div>
        <div>
          <MainRight />
        </div>
      </main>
    </>
  );
};

export default Main;
