import styled from 'styled-components';

export const SaveButtonWrap = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
`;

export const SaveButton = styled.div`
  width: 210px;
  height: 60px;
  background-color: red;
  color: white;
  text-align: center;
  line-height: 60px;
  cursor: pointer;

  &:hover {
    background-color: #333;
    color: white;
  }
`;

export const TopContents = styled.div`
  position: relative;
  height: 104px;
  font-size: 32px;
  font-weight: bold;
  margin: 0 317px;
  padding: 39px 0 21px;
`;

export const FixedContentWrap = styled.div`
  position: sticky;
  top: 60px;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ddd;
  background-color: white;
  z-index: 100;
`;

export const TabItems = styled.div`
  width: 1080px;
  height: 55px;
  margin: 0 auto;
`;
