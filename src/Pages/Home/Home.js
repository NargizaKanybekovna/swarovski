import './Home.css';
import homeImg from '..//..//img/jpg.avif'
import video from '../../img/TT.mp4'
function Home() {
  return (
    <>
      <div className="Home">
        <img src={homeImg} alt="" />
        <video width="100%" height="auto" controls autoPlay muted loop>
          <source src={video} type="video/mp4" />
          <button className='Btn flex'></button>
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

    </>

  );
}

export default Home;
