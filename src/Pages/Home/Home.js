import './Home.css';
import { Link } from 'react-router-dom';
import homeImg from '..//..//img/jpg.avif'
import video from '../../img/TT.mp4'
import cardimg1 from '..//../img/cardimg1.avif'
import cardimg2 from '..//../img/cardimg2.avif'
import cardimg3 from '..//../img/cardimg3.avif'
import categoryimg1 from '..//../img/categoryimg1.avif'
import categoryimg2 from '..//../img/categoryimg2.avif'
import categoryimg3 from '..//../img/categoryimg3.avif'
import categoryimg4 from '..//../img/categoryimg4.avif'
import aboutvideo1 from '..//../img/aboutvideo1.mp4'
import aboutvideo2 from '..//../img/aboutvideo2.mp4'
import aboutvideo3 from '..//..//img/aboutvideo3.mp4'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

function Home() {
  return (
    <>
      <div className="Home">
        <img src={homeImg} alt="" />
        <video width="100%" height="auto" controls autoPlay muted loop>
          <source src={video} type="video/mp4" />
          <h2 className="Home_tit">Sping/Summer 2024</h2>
          <h3 className="Home_txt">Embrace the art of self-expression </h3>
          <div className="button flex">
            <button className="btn">Discover more</button>
            <button className="btn">Read me</button>
          </div>
        </video>
        <div className="container">
          <div className="home_img">
          </div>
        </div>
      </div>
      <section className="Info_grey">
        <div className="container">
          <h1 className="Info_tit">Masters of Light Since 1895</h1>
          <p className="Info_txt">Since 1895, founder Daniel Swarovski’s passion for innovation and design, and mastery of crystal cutting has defined Swarovski as the leading jewelry and accessories brand.</p>
        </div>
      </section>
      <section className="Cards">
        <h1 className="Info_tit">Infinitely Inspiring</h1>
        <div className="Card_in flex">
          <div className="Card">
            <div className='card_img'>
              <Link to="" className="cardImg"> <img src={cardimg1} alt="" /></Link>
            </div>
            <h1 className="Card_tit">Radiant Necklaces</h1>
            <p className="card_txt">Channeled into sculptural forms, fluid crystals are a beautiful expression of Swarovski savoir-faire. Take the modern route to styling with minimalist chains that gleam with your every move.</p>
            <div className="button">
              <button className="btn">Discover more</button>
            </div>
          </div>
          <div className="Card">
            <div className='card_img'>
              <Link to="" className="cardImg"> <img src={cardimg2} alt="" /></Link>
            </div>
            <h1 className="Card_tit">Chic Bracelets</h1>
            <p className="card_txt">An accumulation of cuts in a palette of bright whites and marine blues delivers a radiant refresh, while silhouettes enrich round-the-clock ensembles with subtle elegance. </p>
            <div className="button">
              <button className="btn">Discover more</button>
            </div>
          </div>

          <div className="Card">
            <div className='card_img'>
              <Link to="" className="cardImg"> <img src={cardimg3} alt="" /></Link>
            </div>
            <h1 className="Card_tit">Bold Earrings</h1>
            <p className="card_txt">Full-cut facets in high-octane hues reinterpret crystals with contemporary drama. A striking display of Swarovski’s mastery of light, statement earrings inspire you to shine your brightest.
            </p>
            <div className="button">
              <button className="btn">Discover more</button>
            </div>
          </div>
        </div>
      </section>
      <section className="Category_grey">
        <div className="container">
          <div className='Shop by Category'>
            <h1 className="Info_tit">Shop by Category
            </h1>
            <div className='Category flex'>
              <div className="Category_img">
                <Link to="" className="categoryimg1"><img src={categoryimg1} alt="" />Jewelry</Link>
              </div>
              <div className="Category_img">
                <Link to="" className="categoryimg2"><img src={categoryimg2} alt="" />Watches</Link>
              </div>
              <div className="Category_img">
                <Link to="" className="categoryimg3"><img src={categoryimg3} alt="" />Decorations</Link>
              </div>
              <div className="Category_img">
                <Link to="" className="categoryimg4"><img src={categoryimg4} alt="" />Accessories</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="About">
        <div className="container">
          <h1 className="Info_tit">World of Swarovski</h1>
          <p className="Info_txt">Illuminating the many facets of Swarovski from heritage to lifestyle and beyond.</p>
          <button className="btn">Explore all</button>
          <div className="About_video flex">
            <div className="Video_card">
              <video width="100%" height="100%" controls autoPlay muted loop> <source src={aboutvideo1} type="aboutvideo1.mp4" />  </video>
              <h1 className="Card_tit">Ocean-Inspired Jewelry</h1>
              <p className="card_txt">Our new jewelry families are beautiful works of artistry that feature Swarovski Crystal Pearls, and a palette of blue and green Swarovski Crystals. </p>
              <div className="button">
                <button className="btn">Read me</button>
              </div>
            </div>
            <div className="Video_card">
              <video width="100%" height="100%" controls autoPlay muted loop> <source src={aboutvideo2} type="aboutvideo2.mp4" />  </video>
              <h1 className="Card_tit">A Guide to Watch Styles</h1>
              <p className="card_txt">The perfect blend of fashion and function, watches have the power to elevate any look. </p>
              <div className="button">
                <button className="btn">Read me</button>
              </div>
            </div>
            <div className="Video_card">
              <video width="100%" height="100%" controls autoPlay muted loop> <source src={aboutvideo3} type="aboutvideo3.mp4" />  </video>
              <h1 className="Card_tit">Disney’s Alice in Wonderland and friends</h1>
              <p className="card_txt">This collection celebrates the irresistible spirit of Disney’s iconic characters, reimagining Alice in Wonderland and her friends with impeccable crystal savoir-faire. </p>
              <div className="button">
                <button className="btn">Read me</button>
              </div>
            </div>
          </div>
        </div>

      </section >
      <div className="Home_slider">
        <Swiper 
          spaceBetween={10} 
          slidesPerView={2}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          autoplay={1000}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <Link className="Home_slide" to="#">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/XRVC0LFY33UhYRJc3uusMA/980x551.jpg"
                alt=""
              />
              <p className="Home_slide-txt">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat ab assumenda distinctio. Ex ipsa beatae a totam
                blanditiis repudiandae voluptas!
              </p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="Home_slide" to="#">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/EubK_TDtQfyCj_ibM2KR3A/689x387.jpg"
                alt=""
              />
              <p className="Home_slide-txt">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat ab assumenda distinctio. Ex ipsa beatae a totam
                blanditiis repudiandae voluptas!
              </p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="Home_slide" to="#">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/cqoFqhjwxlqbB99b2xiGSg/689x387.jpg"
                alt=""
              />
              <p className="Home_slide-txt">Lorem ipsum dolor sit amet.</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link className="Home_slide" to="#">
              <img
                src="https://is1-ssl.mzstatic.com/image/thumb/dGQnmrXQqSe_YJJV1kcudQ/689x387.jpg"
                alt=""
              />
              <p className="Home_slide-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos quo fugit, placeat quaerat quod magnam.
              </p>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    




      <section>

      </section>


    </>

  );
}

export default Home;
