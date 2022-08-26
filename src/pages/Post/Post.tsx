import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PostMain from './PostMain';
import Default from './components/Default/Default';
import Funding from './components/Funding/Funding';
import { API } from '../../config';

export interface Image {
  lastModified: number;
  lastModifiedDate?: string;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export interface InfoData {
  category: number | string | Blob;
  title: string;
  summary: string;
  target_amount: number | Blob;
  start_datetime?: string | Blob;
  end_datetime?: string | Blob;
  image: Image | Blob;
}

const Post = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<string | undefined>('');
  const [endDate, setEndDate] = useState<string | undefined>('');
  const [category, setCategory] = useState(1);
  const [image, setImage] = useState<Image>({
    lastModified: 0,
    lastModifiedDate: '',
    name: '',
    size: 0,
    type: '',
    webkitRelativePath: '',
  });
  const [info, setInfo] = useState<InfoData>({
    category: '',
    title: '',
    summary: '',
    target_amount: 0,
    start_datetime: '',
    end_datetime: '',
    image: {
      lastModified: 0,
      lastModifiedDate: '',
      name: '',
      size: 0,
      type: '',
      webkitRelativePath: '',
    },
  });

  console.log(image);

  useEffect(() => {
    setInfo({
      ...info,
      start_datetime: startDate,
      end_datetime: endDate,
      category,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate, category]);

  const saveInfo = (
    e: React.ChangeEvent<HTMLInputElement>,
    number?: boolean
  ) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: number ? Number(value) : value });
  };

  const token = localStorage.getItem('token');
  const sendAllInfo = async () => {
    const formData = new FormData();
    formData.append('category', info.category.toString());
    formData.append('title', info.title);
    formData.append('summary', info.summary);
    formData.append('target_amount', info.target_amount.toString());
    formData.append('start_datetime', info.start_datetime!);
    formData.append('end_datetime', info.end_datetime!);
    formData.append('formData', image.toString());

    const headers = {
      Authorization: `${token}`,
      'Content-Type': 'multipart/form-data',
    };

    await axios({
      url: `${API.POST}`,
      method: 'POST',
      data: formData,
      headers,
    })
      .then(res => {
        alert('등록 완료!');
        navigate('/');
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <PostMain sendAllInfo={sendAllInfo} />
      <Routes>
        <Route
          path="/"
          element={
            <Default
              info={info}
              saveInfo={saveInfo}
              category={category}
              setCategory={setCategory}
              setImage={setImage}
            />
          }
        />
        <Route
          path="/funding"
          element={
            <Funding
              saveInfo={saveInfo}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          }
        />
      </Routes>
    </>
  );
};

export default Post;
