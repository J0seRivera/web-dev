import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';



import App from './routes/App';

/*import Mainpage from './pages/Mainpage';*/

const mainPage = document.getElementById('root');
ReactDOM.render(<App />, mainPage);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
