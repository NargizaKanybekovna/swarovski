import { Link } from 'react-router-dom';
import './Footer.css';
import LogoImg from '..//..//img/swa-brandlogo-icon-small-white.svg'
import fbImg from '..//..//img/facebook_default-outline.svg'
import PinterestImg from '..//..//img/pinterest_default-outline.svg'
import InstImg from '..//..//img/instagram_default-outline.svg'
import YouTubeImg from '..//..//img/youtube_default-outline.svg'
import TikTokImg from '..//..//img/tiktok_default-outline.svg'
import TWImg from '..//..//img/x-twitter_default-outline.svg'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_in flex">
          <div className="footer_menu">
            <h3 className="footer_tit">CUSTOMER SERVICE & FAQ</h3>
            <ul className="footer_list">
              <li> <Link to="">Customer Service Overview
                Gift Card Balance</Link></li>
              <li> <Link to="">Gift Card Balance</Link></li>
              <li> <Link to="">Contact Us</Link></li>
              <li> <Link to="">Size Guide</Link></li>
              <li> <Link to="">Store Finder</Link></li>
            </ul>
          </div>
          <div className="footer_menu">
            <h3 className="footer_tit">ABOUT US</h3>
            <ul className="footer_list">
              <li> <Link to="">About Swarovski</Link></li>
              <li> <Link to="">Sustainability</Link></li>
              <li> <Link to="">Jobs & Career</Link></li>
              <li> <Link to="">Alumni Community</Link></li>
              <li> <Link to="">Corporate Gifts</Link></li>
              <li> <Link to="">For Professionals</Link></li>
              <li> <Link to="">Sitemap</Link></li>
              <li> <Link to="">Kristallwelten</Link></li>
              <li> <Link to="">Swarovski Mobility</Link></li>
              <li> <Link to="">Code of Conduct</Link></li>
            </ul>
          </div>
          <div className="footer_menu">
            <h3 className="footer_tit">LEGAL</h3>
            <ul className="footer_list">
              <li> <Link to="">Terms Of Use</Link></li>
              <li> <Link to="">Terms & Conditions</Link></li>
              <li> <Link to="">Privacy Policy</Link></li>
              <li> <Link to="">Imprint</Link></li>
              <li> <Link to="">REACH information</Link></li>
              <li> <Link to="">Data Protection Consent Statement</Link></li>
            </ul>
          </div>

        </div>
            <hr />
      <div className="footer_content flex">
        <Link to="" className="footer_icon"></Link>
        <Link to="" className="">Other Countries / Regions | en</Link>
      </div>
      <div className="footer_end flex">
        <p className="footer_title">Copyright © 2024 Swarovski Other Countries / Regions. All rights reserved.
          SWAROVSKI and the SWAN logo are registered and trademarks of Swarovski AG.</p>
        <Link to="https://www.swarovski.com/en-AA/" className="footer_logo"><img src={LogoImg} alt="" /></Link>
        <Link to="https://www.facebook.com/SWAROVSKI.global/?locale=ru_RU" className="footer_ic"><img src={fbImg} alt="" /> </Link>
        <Link to="https://ru.pinterest.com/swarovski/" className="footer_ic"><img src={PinterestImg} alt="" /></Link>
        <Link to="https://www.instagram.com/swarovski/" className="footer_ic"><img src={InstImg} alt="" /></Link>
        <Link to="https://www.youtube.com/SWAROVSKI" className="footer_ic"><img src={YouTubeImg} alt="" /></Link>
        <Link to="https://www.tiktok.com/@swarovski" className="footer_ic"><img src={TikTokImg} alt="" /></Link>
        <Link to="https://x.com/swarovski" className="footer_ic"><img src={TWImg} alt="" /></Link>

      </div>
      </div>
    </footer >
  );
}

export default Footer;