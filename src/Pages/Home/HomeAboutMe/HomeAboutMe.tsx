import PotionHeader from "../../../Components/Common/PortionHeader/PortionHeader";
import "./HomeAboutMe.css";

const HomeAboutMe = () => {
  return (
    <div className="home-about-me">
      <PotionHeader title="About Me" />
      <div className="about-me">
        <div className="who-am-i">
          <h2>Who Am I?</h2>
          <p>
            I am a passionate web developer with a love for creating dynamic and
            user-friendly applications. My journey in tech started with a
            curiosity for how things work, and it has evolved into a
            full-fledged career.
          </p>
        </div>
        <div className="skill">
          <h2>My Skills</h2>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Redux</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>HTML5 & CSS3</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutMe;
