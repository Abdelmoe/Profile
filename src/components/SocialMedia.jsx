import React from 'react';
import {BsTwitter , BsInstagram} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div><BsTwitter/></div>
        <div>
          <a href="https://www.facebook.com/abdalmonem.mahmmd" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        </div>
        <div>
            <a href="https://www.instagram.com/moon_m203/" target="_blank" rel="noopener noreferrer">  <BsInstagram/></a>
        </div>
    </div>
  )
}

export default SocialMedia