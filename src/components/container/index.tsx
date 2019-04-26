import React from 'react';
import './index.scss';

import Header from '../header';
import SideNav from '../side-nav';
import Main from '../main';
import Footer from '../footer';

export default function Container() {
  return (
    <div className="grid">
      <Header />
      <SideNav />
      <Main />
      <Footer />
    </div>
  )
}