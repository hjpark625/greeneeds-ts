import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';

interface Images {
  id: number;
  url: string;
  alt: string;
}

interface ImagesProps {
  images: Images[];
}

const NewCarousel = ({ images }: ImagesProps) => (
  <CarouselWrapper>
    <Carousel autoplay style={{ width: '100%', height: '300px' }}>
      {images.map(({ id, url, alt }) => {
        return (
          <CarouelContainer key={id}>
            <CarouselImage src={url} alt={alt} />
          </CarouelContainer>
        );
      })}
    </Carousel>
  </CarouselWrapper>
);

export default NewCarousel;

const CarouselWrapper = styled.div`
  width: 79%;
  height: 300px;
  padding: 120px 0 300px 0;
  margin: 0 auto 50px;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const CarouelContainer = styled.div`
  height: 160px;
  color: #ffffff;
  line-height: 160px;
  text-align: center;
  background: #364d79;
`;
