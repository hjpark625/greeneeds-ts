import React from 'react';
import * as S from './ProjectSection.styled';

interface ProjectSectionProps {
  contentsName: string;
  contents: string;
  contentsRight?: JSX.Element | React.ReactElement | React.ReactNode;
  contentsRightName?: JSX.Element | React.ReactElement | React.ReactNode;
}

const ProjectSection = ({
  contentsName,
  contents,
  contentsRight,
  contentsRightName,
}: ProjectSectionProps) => {
  return (
    <div>
      <S.ContentsWrap>
        <S.ContentInfoWrap>
          <S.ContentsName>{contentsName}</S.ContentsName>
          <S.Contents>{contents}</S.Contents>
        </S.ContentInfoWrap>
        <S.ContentsRightWrap>
          <S.ContentsRight>
            <S.ContentsRightName>{contentsRightName}</S.ContentsRightName>
            <S.ContentsRightMain>{contentsRight} </S.ContentsRightMain>
          </S.ContentsRight>
        </S.ContentsRightWrap>
      </S.ContentsWrap>
    </div>
  );
};

export default ProjectSection;
