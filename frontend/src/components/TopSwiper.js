// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper';
import { styled } from '@mui/material/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
//import 'swiper/css/autoplay';
//SwiperCore.use([Autoplay]);
const imgLink = "url(https://tva1.sinaimg.cn/large/ec678006gy1h70b8un5r4j21hc0u0x6p.jpg)"
const Sw = styled(Swiper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  height: '90%',
  width: '100%',
  paddingBottom:'40px !important',
}));
const Sl = styled(SwiperSlide)((props) => (
{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: props.link,
  backgroundPosition: 'center',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  color: 'white',
  textShadow: 'black 0.1em 0.1em 0.2em',
  borderRadius: '3%',
  width: '30%',
  cursor : "pointer",
}));

const TopSwiper =  () => {
  const navigate = useNavigate();
  return (
    <Sw
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      autoplay
      loop
      pagination={{ clickable: true ,color: "green"}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      style={{
        "--swiper-navigation-color": "#000",
        "--swiper-pagination-color": "grey",
      }}
    >
      <Sl link = {imgLink}><h1>置頂文章 3</h1></Sl>
      <Sl link = {imgLink} onClick={() => alert('swiper')}><h1>置頂文章 1</h1></Sl>
      <Sl link = {imgLink} onClick={()=> navigate('/cards')}><h1>置頂文章 2</h1></Sl>
    </Sw>
  );
};
export default TopSwiper