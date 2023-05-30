import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Container = styled.div`
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;
const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  @media (max-width: 768px) {
    width: 10%;
    border: none;
    position: relative;
    margin: 0;
    justify-content: flex-end;
  }
`;
const Input = styled.input`
  border: none;
  font-size: 16px;
  background: transparent;
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Button = styled.button`
  padding: 0px 12px;
  background: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  @media (max-width: 768px) {
    border: none;
  }
`;

const P = styled.p`
  display: flex;
  margin: 0;
  padding: 9.5px 2px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlinedIcon />
        </Search>
        <Link to="signin" style={{textDecoration: "none"}}>
        <Button>
          <AccountCircleOutlinedIcon />
          <P>SIGN IN</P>
        </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
