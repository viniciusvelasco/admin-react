import React, { useRef } from 'react';

import './index.scss';


export default function Header() {
  const avatarRef = useRef<HTMLInputElement>(null);
  function handleUserDropdown() {
    if (avatarRef && avatarRef.current) {
      if (avatarRef.current.classList.contains("dropdown--active")) {
        avatarRef.current.classList.remove('dropdown--active');
      } else {
        avatarRef.current.classList.add('dropdown--active');
      }
    }
  }
  return (
    <header className="header">
      <i className="fas fa-bars header__menu"></i>
      <div className="header__search">
        <input className="header__input" placeholder="Search..." />
      </div>
      <div className="header__avatar" onClick={handleUserDropdown}>
        <div className="dropdown" ref={avatarRef}>
          <ul className="dropdown__list">
            <li className="dropdown__list-item">
              <span className="dropdown__icon"><i className="far fa-user"></i></span>
              <span className="dropdown__title">my profile</span>
            </li>
            <li className="dropdown__list-item">
              <span className="dropdown__icon"><i className="fas fa-clipboard-list"></i></span>
              <span className="dropdown__title">my account</span>
            </li>
            <li className="dropdown__list-item">
              <span className="dropdown__icon"><i className="fas fa-sign-out-alt"></i></span>
              <span className="dropdown__title">log out</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}