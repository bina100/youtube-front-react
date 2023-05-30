import React from "react";
import styled from "styled-components";
import demoImage from "../img/demo.jpg";
import demoChannelImage from "../img/demoChannel.jpg";
import { Link } from "react-router-dom";

const Container = styled.div`
  /* width: 360px; */
  /* width: 31%; */
  width: ${(props)=> props.type !== "sm" && "31%"};
  margin-bottom:  ${(props)=> props.type === "sm" ? "10px" : "24px"};
  cursor: pointer;
  @media (max-width: 768px) {
    width: 48%;
  }
  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 12px;
  }
`;
const DataCard = styled.div`
    display: ${(props)=> props.type === "sm" && "flex"};
    gap: 10px;
`;
const Image = styled.img`
  width: 100%;
  height:  ${(props)=> props.type === "sm" ? "100px": "202px"};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top:  ${(props)=> props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
  @media (max-width: 480px) {
    margin-top: 4px;
  }
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #999;
  display: ${(props)=> props.type === "sm" && "none"};
`;

const Texts = styled.div``;
const Title = styled.h2`
  font-size: 16px;
  margin: 0;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
`;
const ChannelName = styled.h3`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 4px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;
const Card = ({type}) => {
  return (
    <Container type={type}>
      <Link to="/video/test" style={{ textDecoration: "none" }}>
        <DataCard type={type}>
          <Image src={demoImage} type={type}/>
          <Details type={type}>
            <ChannelImage type={type} src={demoChannelImage} />
            <Texts>
              <Title>test Video</Title>
              <ChannelName>Safe Tube</ChannelName>
              <Info>500 views - 1 day ago</Info>
            </Texts>
          </Details>
        </DataCard>
      </Link>
    </Container>
  );
};

export default Card;
