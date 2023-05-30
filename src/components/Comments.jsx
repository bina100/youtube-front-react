import React from 'react'
import styled from 'styled-components';
import demoChannel from "../img/demoChannel.jpg";
import Comment from './Comment';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
`;
const Avatar = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
`;
const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.soft};
    background: transparent;
    outline: none;
    padding: 5px;
    width: 100%;
`;

const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src={demoChannel}/>
            <Input placeholder='Add a comment...'/>
        </NewComment>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </Container>
  )
}

export default Comments