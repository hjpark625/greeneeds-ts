import styled from 'styled-components';

export const ProjectDetailNav = styled.div`
  width: 100%;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  height: 70px;
`;

export const DetailNavList = styled.div`
  margin: 0 auto;
  width: 1040px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const DetailNavSpan = styled.span`
  font-size: 18px;
  color: #979797;
  padding: 2%;

  &:hover {
    color: black;
    font-weight: 700;
    cursor: pointer;
    border-bottom: 3px solid black;
  }
`;
