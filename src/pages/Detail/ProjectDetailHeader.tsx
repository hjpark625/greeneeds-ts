import React from 'react';
import * as S from './ProjectDetailHeader.styled';

const ProjectDetailHeader = () => {
  return (
    <S.ProjectDetailNav>
      <S.DetailNavList>
        <S.DetailNavSpan>프로젝트 계획</S.DetailNavSpan>
        <S.DetailNavSpan>커뮤니티 </S.DetailNavSpan>
      </S.DetailNavList>
    </S.ProjectDetailNav>
  );
};

export default ProjectDetailHeader;
