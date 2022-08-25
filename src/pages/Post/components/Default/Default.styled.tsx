import styled from 'styled-components';

export const ProjectMainWrap = styled.div`
  position: relative;
  width: 100%;
  background-color: #fcfcfc;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 55px;
    background: linear-gradient(
      180deg,
      rgb(221, 221, 221, 0.3) 0%,
      rgba(252, 252, 252, 1) 72%
    );
  }
`;

export const ProjectEditorWrap = styled.div`
  width: 1080px;
  margin: 0 auto;
  padding: 84px 0 0;
  background-color: #fcfcfc;
`;

export const SelectButton = styled.select`
  width: 259px;
  height: 39px;
  padding: 0 18px;
  margin: auto 0;
`;

export const InputWrap = styled.input`
  width: 630px;
  height: 50px;
  border: 1px solid red;
  border-radius: 10px;
  outline: none;
  padding: 0 10px;
`;

export const InputImg = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  opacity: 0;
`;

export const ImgUploadWrap = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 630px;
  height: 100px;
  border: 1px solid grey;
  border-radius: 10px;
  outline: none;
  padding: 0 10px;
`;

export const ImgUploadTitle = styled.div`
  color: black;
  margin-bottom: 10px;
`;

export const ImgUploadPossible = styled.div`
  color: #bdbdbd;
`;

export const ImgForm = styled.div`
  color: #bdbdbd;
`;
