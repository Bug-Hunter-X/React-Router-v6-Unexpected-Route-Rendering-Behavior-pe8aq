```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function Home(){
  return(
    <div>
      <h1>Home Page</h1>
      <p>This is the home page content.</p>
    </div>
  );
}

function About(){
  return(
    <div>
      <h1>About Page</h1>
      <p>This is the about page content.</p>
    </div>
  );
}

export default App;
```