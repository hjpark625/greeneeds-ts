import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Line } from 'rc-progress';
import styled from 'styled-components';
import { FundingItemsList } from './FundingList';

const Item = ({
  id,
  title,
  thumbnail,
  category,
  summary,
  target_amount,
  total_amount,
  remain_days,
}: FundingItemsList) => {
  const navigate = useNavigate();

  const calculatePercentage = (total_amount / target_amount) * 100;
  const percentage = (total_amount / target_amount).toLocaleString('en-US', {
    style: 'percent',
  });

  const koreanWon = total_amount.toLocaleString('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  });
  const goToDetail = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <ItemBox
      key={id}
      onClick={() => {
        goToDetail();
      }}
    >
      <ItemImage src={thumbnail} alt="item" />
      <InfoBox>
        <ItemCategory>{category}</ItemCategory>

        <div>
          <ItemTitle>{title}</ItemTitle>
        </div>
        <ItemDescription>{summary}</ItemDescription>

        <div>
          <BarTextWrapper>
            <FigureWrapper>
              <Percent>{percentage}</Percent>
              <TotalAmount>{koreanWon}</TotalAmount>
            </FigureWrapper>
            <RemainingDays>{remain_days}일 남음</RemainingDays>
          </BarTextWrapper>
          <Line
            percent={calculatePercentage}
            strokeWidth={1}
            strokeColor="#2ba84a"
          />
        </div>
      </InfoBox>
    </ItemBox>
  );
};
export default Item;

const ItemBox = styled.div`
  margin: 8px;
  background-color: white;
  width: calc(25% - 16px);
`;
const ItemImage = styled.img`
  width: 100%;
  height: 230px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
`;
const ItemCategory = styled.a`
  margin: 10px 0px;
  color: black;
  font-size: 12px;
`;

const ItemTitle = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 16px;
`;

const ItemDescription = styled.div`
  margin: 7px 0;
`;

const BarTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
const FigureWrapper = styled.div`
  display: flex;
`;
const Percent = styled.div`
  margin: 5px 15px 5px 0px;
  font-size: 16px;
  font-weight: 580;
  color: #2ba84a;
`;
const TotalAmount = styled.div`
  margin: 5px 10px 5px 0px;
  font-weight: 550;
  color: grey;
`;
const RemainingDays = styled.div`
  margin: 5px 10px 5px 0px;
  font-weight: 550;
`;
