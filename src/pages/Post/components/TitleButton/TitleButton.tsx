import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './TitleButton.styled';

const TitleButton = ({ title, address }) => {
  const navigate = useNavigate();
  const goToSite = path => {
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
