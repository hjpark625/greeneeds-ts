import styled from 'styled-components';

export const DetailWrap = styled.div`
  width: 100%;
`;

export const DetailMain = styled.div`
  margin: 0 auto 100px;
  width: 1040px;
`;

export const DetailTitle = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const TitleButton = styled.button`
  width: 50px;
  height: 40px;
  border: 1px solid #f4f4f4;
  border-radius: 5px;
  margin-bottom: 50px;
  background-color: #fafafa;
`;

export const TitleSpan = styled.span`
  font-size: 40px;
  font-weight: 600;
`;

export const DetailBody = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
`;

export const ImgBox = styled.div`
  flex: 1;
`;

export const Img = styled.img`
  width: 100%;
`;

export const BodyDetail = styled.div`
  width: 430px;
  padding-left: 50px;
`;

export const TotalFunding = styled.div`
  margin: 5px 0 30px 0;
`;

export const TotalInfoBox = styled.div`
  margin-top: 15px;
  display: flex;
`;

export const TotalPtag = styled.p`
  margin: 15px;
`;

export const TotalSpan = styled.span`
  font-size: 40px;
`;

export const PriceBox = styled(TotalInfoBox)``;

export const RemainnigTimeBox = styled(TotalFunding)``;

export const SponsorBox = styled(TotalFunding)`
  padding-bottom: 30px;
  border-bottom: 1px solid #f4f4f4;
`;

export const DetailBox = styled.div`
  margin-bottom: 15px;
  display: flex;
`;

export const DetailSpan = styled.span`
  font-weight: 600;
  margin-right: 25px;
  white-space: nowrap;
`;

export const ButtonBox = styled.div`
  width: 100%;
  margin-top: 40px;
`;

export const HeartBtn = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  background-color: white;
  border: 1px solid #e4e4e4;
  margin-right: 5px;
  border-radius: 5px;
  display: inline-flex;
  vertical-align: top;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:svg > path {
    color: red;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const ShareBtn = styled(HeartBtn)``;
export const FundingBtn = styled.button`
  height: 3.5rem;
  border: 1px solid #e4e4e4;
  margin-right: 5px;
  border-radius: 5px;
  width: 220px;
  background-color: #ff4543;
  color: white;
  font-size: 18px;
  font-weight: 600;
  opacity: 0.7;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
