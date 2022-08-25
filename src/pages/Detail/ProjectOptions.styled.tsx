import styled from 'styled-components';

export const ProjectOptionsWrap = styled.div`
  width: 430px;
  height: 350px;
  padding: 20px 20px 20px 50px;
`;

export const ProjectOptionMain = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  border: 1px solid #dedede;
  border-radius: 5px;
`;

export const OptionsPrice = styled.div`
  font-size: 26px;
  font-weight: 600;
  margin: 25px 0 20px 0;
`;
export const OptionTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
`;

export const OptionFundingList = styled.div`
  font-size: 16px;
  margin-top: 20px;
`;

export const OptionCheckBox = styled.div`
  width: 70%;
  margin: 20px 0;
`;

export const OptionCheckInput = styled.input`
  width: 25px;
  height: 15px;
  margin-right: 15px;
`;

export const OptionCheckSpan = styled.span`
  font-size: 18px;
`;

export const OptionButton = styled.button`
  height: 3rem;
  border: 1px solid #e4e4e4;
  margin-right: 5px;
  border-radius: 5px;
  width: 220px;
  background-color: #ff4543;
  color: white;
  font-size: 18px;
  font-weight: 600;
  opacity: 1;
  cursor: pointer;
  &:disabled {
    opacity: 0.7;
  }
`;
