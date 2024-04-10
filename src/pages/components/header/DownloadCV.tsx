import styled from "styled-components";

const CVButton = styled.button`
  background-color: #3a8c00;
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 8px;
  padding: 10px 15px 10px 15px;
  color: white;
  box-shadow: 5px 5px black;
  font-size: large;
  transition: all 0.6s ease;
  transition: border 0s ease;

  & :hover {
    cursor: pointer;
    background-color: #a1d28a;
    color: black;
  }

  & :active {
    background-color: #80a56e;
    border: 2px solid black;
  }
`;

function DonwloadCV(){
  console.log("Download CV")
}

export default function DownloadCVButton() {
  return <CVButton onClick={DonwloadCV}>Download CV</CVButton>;
}
