// import Swiper core and required modules
import SwiperCore ,{ Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper';
import { styled } from '@mui/material/styles';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
SwiperCore.use([Autoplay]);
const Sw = styled(Swiper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  height: '10%',
  width: '100%',
  color: theme.palette.text.secondary,
}));
const Sl = styled(SwiperSlide)(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: 'url(https://tva1.sinaimg.cn/large/ec678006gy1h70b8un5r4j21hc0u0x6p.jpg)',
  backgroundPosition: 'center',
  backgroundSize: '100%',
  color: 'white',
}));

const TopSwiper =  () => {
  return (
    <Sw
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      autoplay
      loop
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <Sl onClick={() => alert('swiper')}>置頂文章 1</Sl>
      <Sl>置頂文章 2</Sl>
      <Sl>置頂文章 3</Sl>
    </Sw>
  );
};
export default TopSwiper