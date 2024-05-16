import './Header.css';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom'
import LogoImg from'..//..//img/swa-brandlogo-icon-small-white.svg'

function Header() {
  return (
    <header className="Header">
      <div className="container">
        <div className="Head flex">
          <div>
            <div className='BrandLogo_img'>
              <a href=""><img src={LogoImg} alt="" /></a>
              
            </div>
          </div>
          <nav>
            <ul className='menu_list flex'>
              <li><a href="">Новое в</a></li>
              <li><a href="">Ювелирные изделия</a></li>
              <li><a href="">Часы</a></li>
              <li><a href="">Аксессуары</a></li>
              <li><a href="">Украшения</a></li>
              <li><a href="">Дары</a></li>
              <li><a href="">Мир Сваровски</a></li>
              <div className="icon"></div>
            </ul>
          </nav>

          <Logo />
          <Menu />
          <div className="Buttons flex">
            <Button>Login</Button>
            <Button>Sign In</Button>
          </div>
          <Link to="/cart" className="Cart_ic">
            <span>10</span>
          </Link>
        </div>
      </div>

    </header>
  );
}

export default Header;