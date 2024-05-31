import logo from './logo-black.svg';
import car from './images/car.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar-header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="title">Blog</h1>
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
        <div className='articles'>
          <h2 className='article-header'>Latest Blog Articles</h2>

          <div className='article-container'>
            {[1, 2, 3, 4].map((x) => (
              <div className='article-card' key={x}>
                <div className='article-image-container'>
                  <img src={car} alt='car' />
                </div>
                <div className='article-text'>
                  <h6>Double door car</h6>
                  <p>I love this double door car, I love this double door car I love this double door car I love this double door car. <a href='#more'>Read more</a></p>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
