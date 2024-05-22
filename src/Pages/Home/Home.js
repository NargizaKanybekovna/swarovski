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
      111




      <section>

      </section>


    </>

  );
}

export default Home;
