import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import { API } from '../../config';

const KakaoLoading = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const code = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  }).code;

  useEffect(() => {
    axios.post(API.KAKAO_LOGIN, { code }).then(res => {
      localStorage.setItem('token', res.data.token);
      res.data.token ? navigate('/') : alert('로그인에 실패하였습니다.');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Loading />;
};

export default KakaoLoading;
