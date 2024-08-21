import React, { useContext } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { cryptoData } from '../../Store/DataStore';
import SingleCarouselCoin from './SingleCarouselCoin';

const TrendingCarousel = () => {

  const {trendingCoins} = useContext(cryptoData)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1150 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1149, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 1024, min: 780 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobileSm: {
      breakpoint: { max: 780, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div>
      <Carousel responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      arrows={false} 
      >
        {
          trendingCoins.map((coin, index) =>(<SingleCarouselCoin coin={coin} key={index}/>))
        }
      </Carousel>;
    </div>
  )
}

export default TrendingCarousel
