import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewCarousel from './NewCarousel';
import FundingList from './FundingList';
import LoggedInNav from '../../components/Nav/LoggedInNav';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import { API } from '../../config';

const Main = () => {
  const [images, setImages] = useState([]);
  const [fundingItems, setFundingItems] = useState([]);

  useEffect(() => {
    fetch('/data/carouselData.json')
      .then(response => response.json())
      .then(result => setImages(result));
  }, []);

  useEffect(() => {
    fetch(API.GET_ITEMS)
      .then(res => res.json())
      .then(data => {
        setFundingItems(data.results);
      });
  }, []);

  const sortByRecent = () => {
    fetch(API.SORT_RECENT)
      .then(res => res.json())
      .then(data => {
        setFundingItems(data.results);
      });
  };

  const sortByLikes = () => {
    fetch(API.SORT_LIKES)
      .then(res => res.json())
      .then(data => {
        setFundingItems(data.results);
      });
  };

  return (
    <>
      {!localStorage.getItem('token') ? <Nav /> : <LoggedInNav />}
      <MainWrapper>
        <NewCarousel images={images} />
        <FundingList
          sortByLikes={sortByLikes}
          sortByRecent={sortByRecent}
          fundingItems={fundingItems}
        />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Main;

const MainWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
