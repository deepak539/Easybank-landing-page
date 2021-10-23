import React, {useState} from 'react';
import Navbar from './NavBar.js'
import './Header.scss';
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg';


const Header = () => {

  const [menuBtnImg, setMenuBtnImg] = useState(hamburger);
  const [btnDisplay, setBtnDisplay] = useState('');
  const [moboNavbar, setMoboNavbar] = useState('');

  const clickHandler = () => {
    if(menuBtnImg === hamburger){
      setMenuBtnImg(close);
      setBtnDisplay('request-display');
      setMoboNavbar('mobo-navbar');
    }else{
      setMenuBtnImg(hamburger);
      setBtnDisplay('');
      setMoboNavbar('');
    }
  }

  return (
    <header>
      <img src={logo} alt="easybank" className="logo-img" />
      <button className="menu-btn" onClick={clickHandler}>
        <img src={menuBtnImg} alt="menubtn" className="menu-btn-img" />
      </button>
      <Navbar mobileNavbar={moboNavbar}></Navbar>
      <button className={`request ${btnDisplay}`}>Request Invite</button>
    </header>
  );
};

export default Header;