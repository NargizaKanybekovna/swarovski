import './About.css';
import { Link } from 'react-router-dom';
import cardimg1 from '..//../img/cardimg1.avif'
import cardimg2 from '..//../img/cardimg2.avif'
import cardimg3 from '..//../img/cardimg3.avif'
import aboutvideo1 from '..//../img/aboutvideo1.mp4'
import aboutvideo2 from '..//../img/aboutvideo2.mp4'
import aboutvideo3 from '..//..//img/aboutvideo3.mp4'
function About() {
  return (
    <>
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
    </>
  );
}

export default About;