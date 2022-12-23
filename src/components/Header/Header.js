import React from 'react';
import Image from '../Reusable/Image';
import Ramaera from '../../Data/img/logo-ramaera.png';
import Topbar from './Navbar/Topbar';
import constants from '../../Data/Constants/Constants';
import './Header.css';
import Button from '../Reusable/Button';

 
function Header() {
  return (
    <div className='header-outer-div'>
      <div className='logo-div'>
      <Image src={Ramaera} alt='Ramera' styles={{height:'10rem' , width:'10rem' , marginLeft:'1.5rem'}}/>
      <Topbar/>
      </div>
      <div className='heading-div'>
        <h2 className='Ramaera'>{constants.RAMAERA}</h2>
        <p className='Ramaera-bottom-line'>{constants.RAMAERA_BOTTOMLINE}</p>
        <Button className='header-btn'>{constants.EXPLORE_MORE}</Button>
      </div>
    </div>
  )
}

export default Header
