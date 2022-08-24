import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  const navigate = useNavigate();

  const movePage = (path: string) => {
    navigate(path);
  };

  return (
    <Header>
      <NavBar>
        <LogoBox
          onClick={() => {
            movePage('/');
          }}
        >
          <LogoImg src="/images/Nav/logo.png" alt="" />
        </LogoBox>
        <ButtonBox>
          <GoToPost
            onClick={() => {
              localStorage.getItem('token')
                ? movePage('/post')
                : alert('로그인을 해주세요');
            }}
          >
            프로젝트 올리기
          </GoToPost>
          <GoToLogin
            onClick={() => {
              movePage('/login');
            }}
          >
            <ProfileIcon src="images/Nav/profileIcon.png" alt="profile" />
            <LoginButton>로그인/회원가입</LoginButton>
          </GoToLogin>
        </ButtonBox>
      </NavBar>
    </Header>
  );
};

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 90px;
  padding: 0px 150px;
  box-shadow: 0px 3px 3px 0px #f4f4f4;
  z-index: 999;
  background-color: white;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-top: 15px;
`;

const LogoBox = styled.div`
  width: 150px;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 100%;
  height: auto;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileIcon = styled(LogoImg)`
  width: 32px;
  height: 32px;
  margin: 5px 10px;
`;

const GoToPost = styled.span`
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
`;

const GoToLogin = styled.div`
  cursor: pointer;
  display: flex;
  margin-left: 20px;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
`;

const LoginButton = styled.div`
  font-size: 15px;
  padding-top: 14px;
  padding-right: 15px;
`;

export default Nav;
