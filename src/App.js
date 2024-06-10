import logo from './logo-black.svg';
import './App.css';

import Articles from './components/Articles';

function App() {

  return (
    <div className="App">
      <header className="navbar-header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="title">Car~Blog</h1>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className='main'>
        <Articles />
      </main>
    </div>
  );
}

export default App;
