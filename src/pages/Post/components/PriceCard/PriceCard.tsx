import React from 'react';
import * as S from './PriceCard.styled';

interface PriceCardProps {
  priceTitle: string;
  price: string;
}

const PriceCard = ({ priceTitle, price }: PriceCardProps) => {
  return (
    <S.PriceCardWrap>
      <span>{priceTitle}</span>
      <span>{price}</span>
    </S.PriceCardWrap>
  );
};

export default PriceCard;
