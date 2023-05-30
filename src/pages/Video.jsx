import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import demoChannel from "../img/demoChannel.jpg";
import Comments from "../components/Comments";
import Card from '../components/Card'

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
  @media (max-width: 768px) {
    flex: 12;
  }
`;
const VideoWrapper = styled.div``;
const Iframe = styled.iframe`
  width: 100%;
  height: 600px;
  @media (max-width: 990px) {
    height: 400px;
  }
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 990px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const HR = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;
const Description = styled.p`
  font-size: 14px;
`;
const Subscribe = styled.button`
background: #cc1a00;
font-weight: 500;
color: white;
border-radius: 3px;
border: none;
height: max-content;
padding: 10px 20px;
cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <Iframe
            src="https://www.youtube.com/embed/UjHT_NKR_gU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></Iframe>
        </VideoWrapper>
        <Title>Test video</Title>
        <Details>
          <Info>7,948,134 views - Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> 123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplayOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <HR />
        <Channel>
          <ChannelInfo>
            <Image src={demoChannel} />
            <ChannelDetail>
              <ChannelName>SafeTube</ChannelName>
              <ChannelCounter>200K subscribers</ChannelCounter>
              <Description>
                Video uploading app design using React and Styled Components.
                Youtube clone design with hooks and functional component. React
                video player.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <HR />
<Comments/>
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  );
};

export default Video;
