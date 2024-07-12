import "./Index.scss";
import Intro from "./Intro/Intro";
import SubIntro from "./SubIntro/SubIntro";
import Interface from "./Interface/Interface";
import Automatisation from "./Automatisation/Automatisation";
import How from "./How/How";
import Opportunities from "./Opportunities/Opportunities";

function Index() {
  return (
    <>
      <Intro />
      <SubIntro />
      <Interface />
      <Automatisation />
      <How />
      <Opportunities />
    </>
  );
}

export default Index;
