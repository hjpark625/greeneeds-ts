import React from 'react';
import ProjectSection from '../ProjectSection/ProjectSection';
import * as S from './Default.styled';
import { Image } from '../../Post';

interface IInfo {
  title: string;
  summary: string;
}

interface DefaultProps {
  info: IInfo;
  saveInfo: (e: React.ChangeEvent<HTMLInputElement>, number?: boolean) => void;
  category: number;
  setCategory: React.Dispatch<React.SetStateAction<number>>;
  setImage: React.Dispatch<React.SetStateAction<Image>>;
}

const Default = ({
  info,
  saveInfo,
  category,
  setCategory,
  setImage,
}: DefaultProps) => {
  const onChangeImg = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const uploadFile = (e.target as HTMLInputElement).files![0];
    setImage(uploadFile);
  };
  return (
    <S.ProjectMainWrap>
      <S.ProjectEditorWrap>
        <ProjectSection
          contentsName="프로젝트 카테고리"
          contents="프로젝트 성격과 가장 일치하는
        카테고리를 선택해주세요. 적합하지 않을 경우 운영자에 의해 조정될 수
        있습니다."
          contentsRightName="카테고리"
          contentsRight={
            <>
              <label htmlFor="category-select" />
              <S.SelectButton
                name="category"
                onChange={e => {
                  setCategory(Number(e.target.value));
                }}
                value={category}
              >
                <option value="1">쥬얼리</option>
                <option value="2">의류</option>
                <option value="3">신발</option>
                <option value="4">가방</option>
              </S.SelectButton>
            </>
          }
        />
        <ProjectSection
          contentsName="프로젝트 제목"
          contents="프로젝트의 주제, 창작물의 특징이 드러나는 멋진 제목을 붙여주세요."
          contentsRightName="제목"
          contentsRight={
            <S.InputWrap
              type="text"
              placeholder="제목을 입력해주세요"
              name="title"
              onChange={e => {
                saveInfo(e);
              }}
              value={info.title}
            />
          }
        />
        <ProjectSection
          contentsName="프로젝트 요약"
          contents="후원자 분들이 프로젝트를 빠르게 이해할 수 있도록
            명확하고 간략하게 소개해주세요."
          contentsRight={
            <S.InputWrap
              name="summary"
              type="text"
              value={info.summary}
              placeholder="제목을 입력해주세요"
              onChange={e => {
                saveInfo(e);
              }}
            />
          }
        />
        <ProjectSection
          contentsName="프로젝트 대표 이미지"
          contents="후원자들이 프로젝트의 내용을 쉽게 파악하고 좋은 인상을 받을 수 있도록 이미지 가이드라인을 따라 주세요.
            "
          contentsRight={
            <S.ImgUploadWrap>
              <S.ImgUploadTitle>이미지 업로드</S.ImgUploadTitle>
              <S.ImgUploadPossible>
                최소 1개, 최대 5개까지 업로드 가능
              </S.ImgUploadPossible>
              <S.ImgForm>
                파일 형식: jpg 또는 png / 사이즈:가로 1,240px, 세로 930px
              </S.ImgForm>
              <form>
                <label htmlFor="profile-upload" />
                <S.InputImg
                  name="FormData"
                  type="file"
                  id="profile-upload"
                  accept="image/*"
                  multiple
                  onInput={e => {
                    onChangeImg(e);
                  }}
                />
              </form>
            </S.ImgUploadWrap>
          }
        />
        <ProjectSection
          contentsName="프로젝트 대표 동영상"
          contents="2~3분 이내의 짧은 영상으로 프로젝트를 효과적으로 소개해보세요. 대표 영상을 등록하시면 프로젝트 상세에서 이미지와 함께 제공됩니다.
            "
          contentsRight={
            <S.ImgUploadWrap>
              <S.ImgUploadTitle>영상 업로드</S.ImgUploadTitle>
              <S.ImgUploadPossible>
                파일형식은 mov, mp4, wmv, avi로
              </S.ImgUploadPossible>
              <S.ImgForm>용량은 최대 200MB까지 가능합니다.</S.ImgForm>
              <S.InputImg type="file" accept=".mov, .mp4, .wmv, .avi" />
            </S.ImgUploadWrap>
          }
        />
      </S.ProjectEditorWrap>
    </S.ProjectMainWrap>
  );
};

export default Default;
