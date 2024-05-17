import './About.css';
import cardImg from'..//../img/cardimg1.avif'
function About() {
  return (
    <>
      <section className='Cart'>
    <div className='container'>
      <title>Cart</title>
      <h1 className='title'>Infinitely Inspiring</h1>
      <div className='Carts_in flex'>
        <div className='card'>
          <div className='card_img'>
            <img src={cardImg} alt="" />
          </div>

        </div>

      </div>
      </div>
      </section>
    </>
  );
}

export default About;