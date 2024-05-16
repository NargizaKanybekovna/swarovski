import './Home.css';
import homeImg from'..//..//img/jpg.avif'
import video from'../../img/TT.mp4'
function Home() {
  return (
    <>
      <div className="Home">
        <div className="home_img">
          <img src={homeImg} alt="" />
          <video width="100%" height="auto" controls autoPlay muted loop> 
            <source src={video} type="video/mp4"/>
            <button className='Btn flex'></button></video>
        </div>
      </div>
      <section >

      </section>

    </>
    
  );
}

export default Home;
