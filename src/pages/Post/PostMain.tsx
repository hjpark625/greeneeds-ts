import React from 'react';
import TitleButton from './components/TitleButton/TitleButton';
import * as S from './PostMain.styled';

const PostMain = ({ sendAllInfo }) => {
  return (
    <>
      <S.SaveButtonWrap>
        <S.SaveButton
          onClick={e => {
            e.preventDefault();
            sendAllInfo();
          }}
        >
          저장
        </S.SaveButton>
      </S.SaveButtonWrap>
      <S.TopContents>프로젝트 기획</S.TopContents>
      <S.FixedContentWrap>
        <S.TabItems>
          {ADDRESS_DATA.map(list => (
            <TitleButton
              key={list.id}
              address={list.address}
              title={list.title}
            />
          ))}
        </S.TabItems>
      </S.FixedContentWrap>
    </>
  );
};

export default PostMain;

const ADDRESS_DATA = [
  {
    id: 1,
    title: '기본정보',
    address: '/post',
  },
  {
    id: 2,
    title: '펀딩계획',
    address: '/post/funding',
  },
];
