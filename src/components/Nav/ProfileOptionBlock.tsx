import React from 'react';
import styled from 'styled-components';

interface LogOut {
  onLogOut: () => void;
}

const ProfileOptionBlock = ({ onLogOut }: LogOut) => {
  return (
    <OptionWrapper>
      <ListBox>
        <OptionBlock>프로필</OptionBlock>
        <OptionBlock>응원권</OptionBlock>
      </ListBox>
      <ListBox>
        <OptionBlock>후원현황</OptionBlock>
        <OptionBlock>관심 프로젝트</OptionBlock>
        <OptionBlock>팔로우</OptionBlock>
      </ListBox>
      <ListBox>
        <OptionBlock>알림</OptionBlock>
        <OptionBlock>메시지</OptionBlock>
      </ListBox>
      <ListBox>
        <OptionBlock>내가 만든 프로젝트</OptionBlock>
        <OptionBlock>설정</OptionBlock>
      </ListBox>
      <LogoutBox>
        <LogoutButton
          onClick={() => {
            onLogOut();
          }}
        >
          로그아웃
        </LogoutButton>
      </LogoutBox>
    </OptionWrapper>
  );
};

const OptionWrapper = styled.div`
  overflow-y: scroll;
  position: absolute;
  right: 150px;
  top: 75px;
  width: 240px;
  height: 200px;
  padding: 16px 0;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  z-index: 999;
  background-color: white;
`;

const ListBox = styled.div`
  &:not(:first-child) {
    border-top: 1px solid #dfdfdf;
  }
`;

const LogoutBox = styled.form`
  border-top: 1px solid #dfdfdf;
`;

const OptionBlock = styled.div`
  transition: all 0.2s ease-in-out;
  padding: 15px 16px;
  font-size: 15px;
  font-weight: 300;
  cursor: pointer;

  &:hover {
    background-color: #dfdfdf;
    font-weight: bolder;
  }
`;

const LogoutButton = styled.button`
  transition: all 0.2s ease-in-out;
  padding: 15px 16px;
  text-align: left;
  font-size: 15px;
  font-weight: 300;
  cursor: pointer;
  border: none;
  background-color: white;
  width: 100%;

  &:hover {
    background-color: #dfdfdf;
    font-weight: bolder;
  }
`;

export default ProfileOptionBlock;
