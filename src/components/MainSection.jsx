import React from 'react';
import '../assets/styles/components/MainSection.scss';
const MainSection = ({ children }) => (
  <section className="section">
    <div className="container">
      <div className="container__grid">
        {children}
      </div>
    </div>
  </section>
);

export default MainSection;