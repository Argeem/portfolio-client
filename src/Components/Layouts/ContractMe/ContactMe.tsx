import facebook_icon from "../../../assets/contract-icon/facebook.png";
import instagram_icon from "../../../assets/contract-icon/instagram.png";
import github_icon from "../../../assets/contract-icon/github.png";
import linkedin_icon from "../../../assets/contract-icon/linkedin.png";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="contract-me">
      <img src={facebook_icon} alt="Facebook" />
      <img src={instagram_icon} alt="Instagram" />
      <img src={github_icon} alt="GitHub" />
      <img src={linkedin_icon} alt="LinkedIn" />
    </div>
  );
};

export default ContactMe;
