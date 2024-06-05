import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Flex, Img } from '@chakra-ui/react';
import { generateImgCloudFrontUrl } from '../../utils/url';
import prevArrow from '../../assets/prevArrow.svg';
import nextArrow from '../../assets/nextArrow.svg';

export interface PurchaseImagesProps {
  imageNames: string[];
}

export const PrevArrow = (props: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) => {
  const { className, style, onClick } = props;
  return (
    <div>
      <img
        className={className}
        src={prevArrow}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    </div>
  );
};

export const NextArrow = (props: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) => {
  const { className, style, onClick } = props;
  return (
    <div>
      <img
        className={className}
        src={nextArrow}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    </div>
  );
};

export const AuctionPurchaseImages = ({ imageNames }: PurchaseImagesProps) => {
  const settings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <Flex
      flexDirection="row"
      w="100%"
      m="2.25rem"
      maxW={['20rem', '25rem', '32rem']}
    >
      <Slider {...settings}>
        {imageNames.map((imageName: string) => (
          <Img
            key={imageName}
            src={generateImgCloudFrontUrl(imageName)}
            alt={imageName}
            w={['15rem', '20rem', '25rem']}
            h={['20rem', '25rem', '30rem']}
            maxW="30rem"
            maxH="30rem"
          />
        ))}
      </Slider>
    </Flex>
  );
};
