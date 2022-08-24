import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { API } from '../../config';
import ProfileOptionBlock from './ProfileOptionBlock';

interface UserData {
  id?: number;
  nickname?: string;
}

const LoggedInNav = () => {
  const [userData, setUserData] = useState<UserData>({});
  const [isShowOption, setIsShowOption] = useState(false);

  const navigate = useNavigate();

  const onLogOut = () => {
    localStorage.removeItem('token');
  };

  const token: string | null = localStorage.getItem('token');

  const showOptions = () => {
    setIsShowOption(prev => !prev);
  };
  useEffect(() => {
    axios
      .get(API.USER_INFO, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then(res => {
        setUserData(res.data.result);
      })
      .catch(err => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              movePage('/post');
            }}
          >
            프로젝트 올리기
          </GoToPost>
          <HeartIcon src="/images/Nav/heartIcon.png" alt="" />
          <BellIcon src="/images/Nav/notificationIcon.png" alt="Bell" />
          <UserOption
            onClick={() => {
              showOptions();
            }}
          >
            <ProfileIcon src="images/Nav/profileIcon.png" alt="profile" />
            {userData && <UserName>{userData.nickname}</UserName>}
          </UserOption>
          {isShowOption && <ProfileOptionBlock onLogOut={onLogOut} />}
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

const UserOption = styled.div`
  display: flex;
  margin-left: 20px;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  cursor: pointer;
`;

const UserName = styled.div`
  font-size: 15px;
  padding-top: 14px;
  padding-right: 15px;
`;

const HeartIcon = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin-left: 20px;
`;

const BellIcon = styled(HeartIcon)``;

export default LoggedInNav;
