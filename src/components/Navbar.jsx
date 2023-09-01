import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  margin-bottom: 20px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  padding: 5px;
  margin-right: 5px;
  border: none;
  ${mobile({ width: "50px", margin: "0", padding: "0" })}
`;

const Center = styled.div`
  & a {
    text-decoration: none;
    color: black;
  }
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 50px;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  & a {
    text-decoration: none;
    color: black;
  }
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontsize: 16 }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>
            <a href="/">ZEMI.</a>
          </Logo>
        </Center>

        <Right>
          <MenuItem>
            <a href="/registor">REGISTOR</a>
          </MenuItem>
          <MenuItem>
            <a href="/sign-in">SIGN IN</a>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <a href="/cart">
                <ShoppingCartOutlined />
              </a>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
