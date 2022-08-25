import React from 'react';
import { Link } from 'react-scroll';
import * as S from './ProjectDetail.styled';

const ProjectDetail = () => {
  return (
    <S.ProjectDetailMain>
      <S.ProjectButtonBox>
        <Link to="1" spy={true} smooth={true}>
          <S.ProjectButton>소개</S.ProjectButton>
        </Link>
        <Link to="2" spy={true} smooth={true}>
          <S.ProjectButton>예산</S.ProjectButton>
        </Link>
      </S.ProjectButtonBox>
    </S.ProjectDetailMain>
  );
};

export default ProjectDetail;
