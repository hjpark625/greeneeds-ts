import React from 'react';
import * as S from './ProjectBudget.styled';

const ProjectBudget = ({ budget_plan }: { budget_plan: string }) => {
  return (
    <S.BudjetWrap>
      <S.BudjetTitle> | 프로젝트 예산</S.BudjetTitle>
      <S.BudjetBody id="2">
        <S.BudjetBodyText>{budget_plan}</S.BudjetBodyText>
      </S.BudjetBody>
    </S.BudjetWrap>
  );
};

export default ProjectBudget;
