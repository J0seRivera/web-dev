import React from 'react';

class Searchbar extends React.Component {
  render() {
    return (
      <div className="container">
        <section className="main">
          <h2 className="main__title">¿Qué quieres ver hoy?</h2>
          <input className="input" type="text" placeholder="modelo, marca, año..." />
        </section>
      </div>
    )
  }
}

export default Searchbar;