import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './TitleButton.styled';

interface TitleButtonProps {
  title: string;
  address: string;
}

const TitleButton = ({ title, address }: TitleButtonProps) => {
  const navigate = useNavigate();
  const goToSite = (path: string) => {
    navigate(path);
  };

  return (
    <S.TitleButtonWrap
      onClick={() => {
        goToSite(address);
      }}
    >
      {title}
    </S.TitleButtonWrap>
  );
};

export default TitleButton;
