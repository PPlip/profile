//import logo from './logo.svg';
import pic from './portrait.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-namecard">
        <p>
          <code></code> Philip Chen 
        </p>

        <img src={pic} className="App-logo" alt="logo" Philip Chen/>
      </header>
    
      <header className="App-header">
        <p>
          <code></code> Hello, my name is Philip Chen. I am an undergrad electrical engineering student at UCSD with big dreams. Aim for the stars, reach for the moon. Isaiah 6:9
        </p>
    
        <a
          className="App-link"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Linkedin
        </a>
      </header>
    </div>
    
    
  );
  
}

export default App;
