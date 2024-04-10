import styled from "styled-components";
import { discord, twitter, youtube } from "../../../assets";

const SocialMediaSld = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #88008F;

  & a img {
    max-width: 40px;
    margin: 10px
  }
`;

export default function SocialMedia() {
  return (
    <SocialMediaSld>
      <a href="#">
        <img src={twitter} alt="Twitter" />
      </a>
      <a href="#">
        <img src={discord} alt="Discord" />
      </a>
      <a href="#">
        <img src={youtube} alt="You Tube" />
      </a>
    </SocialMediaSld>
  );
};
