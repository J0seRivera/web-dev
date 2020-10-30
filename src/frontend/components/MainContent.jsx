import React from 'react';
import '../assets/styles/components/MainContent.scss';

const MainContent = ({ children }) => (
  <div className='main__content'>
    <section className='carousel'>
      <div className='carousel__container'>
        {children}
      </div>
    </section>
  </div>
);

export default MainContent;
