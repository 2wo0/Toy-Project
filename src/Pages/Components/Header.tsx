import React from "react";
import styled from "styled-components";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import logo from "../../Image/logo.jpg";

export default function Header() {
  return (
    <HeaderWrap>
      <HeaderTab>
        <MenuWrap>
          <MenuOutlined style={{ fontSize: "20px", color: "#08c" }} />
        </MenuWrap>
        <Logo src={logo} alt="logo" />
        <UserTab>
          <SearchOutlined style={{ fontSize: "20px", color: "#08c" }} />
          <Login>LOGIN</Login>
          <Join>JOIN</Join>
          <MyPage>MYPAGE</MyPage>
          <Cart>CART</Cart>
        </UserTab>
      </HeaderTab>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  width: 1425px;
  height: 130px;
  margin: 0 auto;
  padding-top: 23px;
  border: 1px solid black;
`;

const HeaderTab = styled.div`
  ${(props) => props.theme.flexSpaceBetweenCenter};
  width: 1425px;
  height: 59px;
  border: 1px solid black;
`;

const MenuWrap = styled.div`
  width: 50px;
  margin-left: 20px;
  border: 1px solid black;
`;

const Logo = styled.img`
  width: 150px;
  margin-left: 100px;
  border: 1px solid black;
  object-fit: cover;
`;

const UserTab = styled.div`
  ${(props) => props.theme.flexSpaceBetweenCenter};
  width: 315px;
  height: 28px;
  border: 1px solid black;
`;

const Login = styled.div``;

const Join = styled.div``;

const MyPage = styled.div``;

const Cart = styled.div``;
