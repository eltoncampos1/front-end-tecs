import React from 'react';
import Carousel from 'react-elastic-carousel';

import { CarouselWrapper, Img } from './styles';

import breakPoints from '../configs/breakPoints';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';

const Carrousel = () => {
    return(
        <CarouselWrapper>
            <Carousel breakPoints={breakPoints}>
                <Img src={img1} alt=""></Img>      
                <Img src={img2} alt=""></Img>      
                <Img src={img1} alt=""></Img>                       
                <Img src={img2} alt=""></Img>                       
                <Img src={img1} alt=""></Img>                       
                <Img src={img2} alt=""></Img>                       
            </Carousel>
         </CarouselWrapper>
    )
}

export default Carrousel;