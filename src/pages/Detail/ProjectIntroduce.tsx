import React from 'react';
import * as S from './ProjectIntroduce.styled';
import ProjectOptions from './ProjectOptions';

interface IntroduceProps {
  title: string;
  introduction: string;
  image_url: { id: number; url: string }[];
  price: number;
}

const ProjectIntroduce = ({
  title,
  introduction,
  image_url,
  price,
}: IntroduceProps) => {
  return (
    <S.IntroduceWrap>
      <S.IntroduceMain id="1">
        <S.IntroduceTitleBox>
          <S.IntroduceTitle> | 프로젝트 소개 </S.IntroduceTitle>
        </S.IntroduceTitleBox>
        <S.IntroduceTextBox>
          <S.IntroduceTextSpan>{introduction}</S.IntroduceTextSpan>
          {image_url.map(({ url, id }) => {
            return <S.IntroduceImg src={url} alt="items" key={id} />;
          })}
        </S.IntroduceTextBox>
      </S.IntroduceMain>
      <ProjectOptions title={title} price={price} />
    </S.IntroduceWrap>
  );
};

export default ProjectIntroduce;
