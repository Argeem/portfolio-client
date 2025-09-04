import HomeAboutMe from "./HomeAboutMe/HomeAboutMe";
import HomeContact from "./HomeContact/HomeContact";
import HomeHero from "./HomeHero/HomeHero";
import HomeProjects from "./HomeProjects/HomeProjects";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeAboutMe />
      <HomeProjects />
      <HomeContact />
    </div>
  );
};

export default Home;
