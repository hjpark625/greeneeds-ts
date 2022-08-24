import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <ListsWrapper>
          <Lists>
            <ListTitle>그리니즈</ListTitle>
            <ListItem>공지사항</ListItem>
            <ListItem>서비스 소개</ListItem>
            <ListItem>채용</ListItem>
            <ListItem>2021 연말결산</ListItem>
          </Lists>
          <Lists>
            <ListTitle>이용 안내</ListTitle>
            <ListItem>헬프 센터</ListItem>
            <ListItem>첫 후원 가이드</ListItem>
            <ListItem>창작자 가이드</ListItem>
            <ListItem>제휴·협력</ListItem>
          </Lists>
          <Lists>
            <ListTitle>정책</ListTitle>
            <ListItem>이용약관</ListItem>
            <ListItem>개인정보 처리방침</ListItem>
            <ListItem>상품 심사 기준</ListItem>
          </Lists>
          <Lists>
            <ListTitle>App</ListTitle>
            <DownloadBox>
              <DownloadIcon
                src="/images/Footer/googleIcon.png"
                alt="PlayStore"
              />
              안드로이드
            </DownloadBox>
            <DownloadBox>
              <DownloadIcon src="/images/Footer/appleLogo.png" alt="apple" />
              iOS
            </DownloadBox>
          </Lists>
        </ListsWrapper>
        <Support>
          <SupportText>고객지원</SupportText>
          <SupportText>평일 9:00 ~ 17:00 (12:00 ~ 14:00 제외)</SupportText>
          <QuestionButton>그리니즈에 문의</QuestionButton>
        </Support>
      </FooterTop>
      <FooterBottom>
        <CompanyInfo>
          <InfoTitle>회사명</InfoTitle>
          <InfoText>그리니즈</InfoText>
          <InfoTitle>주소</InfoTitle>
          <InfoText>
            서울시 강남구 테헤란로 427 위워크 타워(위워크 선릉 2호점)
          </InfoText>
          <InfoTitle>대표</InfoTitle>
          <InfoText>헤헤헿</InfoText>
          <InfoTitle>사업자등록번호</InfoTitle>
          <InfoText>103-76-45312</InfoText>
          <br />
          <InfoTitle>통신판매업 신고번호</InfoTitle>
          <InfoText>2022-30502165-12-5-02135</InfoText>
          <InfoTitle>대표번호</InfoTitle>
          <InfoText>02-1234-5678</InfoText>
          <br />
          <InfoText>© 2022 Greeneeds Inc.</InfoText>
        </CompanyInfo>
        <div>
          <SnsIcon
            href="https://www.kakaocorp.com/page/service/service/KakaoTalk"
            target="_blank"
          >
            <IconImg src="/images/Footer/kakaoIcon.png" alt="" />
          </SnsIcon>
          <SnsIcon href="https://www.facebook.com/" target="_blank">
            <IconImg src="/images/Footer/facebookIcon.png" alt="" />
          </SnsIcon>
          <SnsIcon href="https://twitter.com/" target="_blank">
            <IconImg src="/images/Footer/twitterIcon.png" alt="" />
          </SnsIcon>
          <SnsIcon href="https://www.instagram.com/" target="_blank">
            <IconImg src="/images/Footer/instagramIcon.png" alt="" />
          </SnsIcon>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 0px 150px;
  width: 100%;
  height: 300px;
  bottom: 0;
  border-top: 1px solid #d8d8d8;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 180px;
  padding-top: 20px;
`;

const Lists = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  &:not(:first-child) {
    margin-left: 40px;
  }
`;

const ListTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const ListItem = styled.div`
  cursor: pointer;
  margin-bottom: 10px;
  color: #717171;
`;

const ListsWrapper = styled.div`
  display: flex;
`;

const Support = styled.div`
  width: 220px;
`;

const FooterBottom = styled(FooterTop)`
  height: 120px;
  border-top: 1px solid #d8d8d8;
`;

const DownloadBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 120px;
  height: 35px;
  text-align: center;
  border: 1px solid black;
  border-radius: 4px;
  border-style: none;
  margin-bottom: 10px;
  background-color: #f0f0f0;
  color: #717171;
  cursor: pointer;
`;

const DownloadIcon = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 5px;
`;

const SupportText = styled.div`
  &:first-child {
    font-weight: bolder;
  }
  &:nth-child(2) {
    font-size: 12px;
    margin-top: 20px;
    color: #717171;
  }
`;

const QuestionButton = styled.div`
  text-align: center;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  width: 160px;
  height: 30px;
  margin-top: 10px;
  padding: 8px;
  font-size: 14px;
  cursor: pointer;
`;

const CompanyInfo = styled.div`
  width: 800px;
  height: 110px;
`;

const InfoTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const InfoText = styled.span`
  margin: 0 8px;
  font-size: 14px;
  color: #717171;
`;

const SnsIcon = styled.a`
  margin-right: 20px;
`;

const IconImg = styled.img`
  width: 24px;
  height: 24px;
`;

export default Footer;
