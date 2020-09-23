import React from 'react';

import '../assets/styles/components/Search.scss';
const Search = () => (
  <div className="container">
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input className="input" type="text" placeholder="modelo, marca, año..." />
    </section>
  </div>
);
export default Search;