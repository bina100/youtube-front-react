import React from 'react'
import styled from 'styled-components';
import demoChannel from "../img/demoChannel.jpg";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0px;
  @media (max-width: 768px) {
    margin: 5px 0px;
  }
`;
const Avatar = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
`;

const Detailes = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
color: ${({ theme }) => theme.text};

`;

const Name = styled.span`
font-size: 13px;
font-weight: 500;
`;
const Date = styled.span`
font-size: 12px;
font-weight: 400;
color: ${({ theme }) => theme.textSoft};
margin-left: 5px;

`;
const Text = styled.span`
font-size: 14px;
`;
const Comment = () => {
  return (
    <Container>
        <Avatar src={demoChannel}/>
        <Detailes>
            <Name>Bina St <Date>1 day ago</Date></Name>
        <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatibus ratione est debitis facilis accusantium rerum ea omnis, inventore molestiae porro, veritatis, obcaecati suscipit tempore odio a laboriosam? Consequuntur, aut.
        </Text>
        </Detailes>
    </Container>
  )
}

export default Comment