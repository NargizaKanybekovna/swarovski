import './Header.css';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom'
import LogoImg from '..//..//img/swa-brandlogo-icon-small-white.svg'

function Header() {
  return (
    <header className="Header">
      <div className="container">
        <div className="Head flex">
          <div>
            <div className="BrandLogo_img flex">
              <Link to="" className="BrandLogo_img"><img src={LogoImg} alt="" /></Link>
              <nav>
                <ul className="menu_list flex">
                  <li><Link to="">Home</Link></li>
                  <li><Link to="">About</Link></li>
                  <li><Link to="">Contatcs</Link></li>
                  <li><Link to="">Cart</Link></li>
                  <li><Link to="">Delivery</Link></li>
                  <div className="button flex">
                    <button className="btn_menu">saerch</button>
                    <button className="btn_black">Sign in</button>
                  </div>
                </ul>
              </nav>


            </div>
          </div>
          <nav>
            <ul className="menu_list flex">
              <li><Link to="">New In</Link></li>
              <li><Link to="">Jewelry</Link></li>
              <li><Link to="">Watches</Link></li>
              <li><Link to="">Accessories</Link></li>
              <li><Link to="">Decorations</Link></li>
              <li><Link to="">Gifts</Link></li>
              <li><Link to="">World of Swarovski</Link></li>
            </ul>
          </nav>


          {/* <Logo />
          <Menu />
          <div className="Buttons flex">
            <Button>Login</Button>
            <Button>Sign In</Button>
          </div>
          <Link to="/cart" className="Cart_ic">
            <span></span>
          </Link> */}

        </div>
      </div>

    </header>
  );
}

export default Header;