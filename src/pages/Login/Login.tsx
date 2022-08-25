import React from 'react';
import styled from 'styled-components';
import { KAKAO_AUTH_URL } from '../../OAuth';

const Login = () => {
  const goToKakao = () => {
    window.open(KAKAO_AUTH_URL, '_self');
  };

  return (
    <>
      <div>
        <LoginHeader>
          <LogoImg src="/images/Login/logo.png" alt="Greeneeds Logo" />
        </LoginHeader>
        <div>
          <LoginTitle>간편하게 로그인하고</LoginTitle>
          <LoginText>세상에 하나뿐인</LoginText>
          <LoginText>특별한 친환경 상품을 발견해보세요</LoginText>
        </div>
        <ButtonWrapper>
          <LoginButton
            onClick={() => {
              goToKakao();
            }}
          >
            <KakaoLoginImg
              src="/images/Login/kakaoLoginButton.png"
              alt="loginBtn"
            />
          </LoginButton>
        </ButtonWrapper>
      </div>
      <BackgroundImg
        src="/images/Login/ecoFriendly.jpeg"
        alt="background Image"
      />
    </>
  );
};

const ButtonWrapper = styled.div`
  margin-left: 150px;
`;

const LoginButton = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const KakaoLoginImg = styled.img`
  width: 400px;
  height: 60px;
`;

const LoginHeader = styled.header`
  width: 100%;
  margin-left: 150px;
  margin-top: 150px;
  margin-bottom: 100px;
`;

const LogoImg = styled.img`
  width: 200px;
  height: 80px;
`;

const LoginTitle = styled.p`
  margin-left: 150px;
  margin-bottom: 20px;
`;

const LoginText = styled(LoginTitle)`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bolder;
  &:last-child {
    margin-bottom: 50px;
  }
`;

const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
`;

export default Login;
