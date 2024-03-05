import React from 'react';
import "./../nav.css";

function Header(props) {
  console.log(props);
  return (
    <>
      <div className='nav-bar'>
        <div className='logo'>{props.user}</div>
        <div className='list'>
          <div className='ele'>About</div>
          <div className='ele'>Skills</div>
          <div className='ele'>Projects</div>
          <div className='ele'>Contact Me</div>
        </div>
      </div>
    </>
  );
}

export default Header;