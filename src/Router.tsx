import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Detail from './pages/Detail/Detail';
import Post from './pages/Post/Post';
import KakaoLoading from './pages/Login/KakaoLoading';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/post/*" element={<Post />} />
        <Route path="/users/signin/kakao" element={<KakaoLoading />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
