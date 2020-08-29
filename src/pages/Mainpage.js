import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../components/styles/main.css';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import Mainsection from '../components/Mainsection';
import Footer from '../components/Footer';
class Mainpage extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Searchbar />
        </main>
        <Mainsection />
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Mainpage;