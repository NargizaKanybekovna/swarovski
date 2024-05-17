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
              <li><a href="">New In</a></li>
              <li><a href="">Jewelry</a></li>
              <li><a href="">Watches</a></li>
              <li><a href="">Accessories</a></li>
              <li><a href="">Decorations</a></li>
              <li><a href="">Gifts</a></li>
              <li><a href="">World of Swarovski</a></li>
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