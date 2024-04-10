import { discord, twitter, youtube } from "../../../assets";

export default function SocialMedia() {
  return (
    <div className="display-flex-center social-media">
      <a href="#">
        <img src={twitter} alt="Twitter" />
      </a>
      <a href="#">
        <img src={discord} alt="Discord" />
      </a>
      <a href="#">
        <img src={youtube} alt="You Tube" />
      </a>
    </div>
  );
};
