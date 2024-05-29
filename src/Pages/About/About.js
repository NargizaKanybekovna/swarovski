import './About.css';
import { Link } from 'react-router-dom';
import cardimg1 from '..//../img/cardimg1.avif'
import cardimg2 from '..//../img/cardimg2.avif'
import cardimg3 from '..//../img/cardimg3.avif'
import milleniaimg from '..//..//img/milleniaimg.avif'

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


      <section className="World of Swarovski">
        <div className="container">
          <h1 className="Word_tit">World of Swarovski</h1>
          <p className="Word_txt">Illuminating the many facets of Swarovski from heritage to lifestyle and beyond. </p>
          <p className="word_desc">Highlights</p>
          <div className="word_img">
            <Link to="" className="word_img"> <img src={milleniaimg} alt="" /></Link>
          </div>
          <h2 className="world_txt">Millenia</h2>
          <h3 className="world_txt">A love letter to crystal</h3>
          <div className="button">
              <button className="btn_word">Read more</button>
            </div>



        </div>

      </section>
    </>
  );
}

export default About;