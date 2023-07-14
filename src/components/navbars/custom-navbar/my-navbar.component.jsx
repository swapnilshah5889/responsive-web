import './my-navbar.styles.scss';
import Logo from '../../../assets/react.svg';
import { useState } from 'react';

const CustomNavBar = () => {

    const [menuVisible, setMenuVisible] = useState(0);

    function handleToggleMenu(event) {
        setMenuVisible(!menuVisible);
    }
    return (
        <div class="mynavbar-container">
            <div className="navbar-logo">
                <img className='mynavbar-img-brand' src={Logo} alt="logo" />
                <span classname='app-title'>My App</span>
            </div> 
            <div className={`navbar-titles ${menuVisible?'visible':''}`}>
                <a href="#news" className='mynavbar-links' onClick={handleToggleMenu}>News</a>
                <a href="#contact" className='mynavbar-links' onClick={handleToggleMenu}>Contact</a>
                <a href="#about" className='mynavbar-links' onClick={handleToggleMenu}>About</a>
                <a class="active" href="#home" className='mynavbar-links' onClick={handleToggleMenu}>Home</a>
            </div>

            <div class="hamburger" onClick={handleToggleMenu}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    );
}

export default CustomNavBar;