```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

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
  const location = useLocation();
  console.log('Home location:', location);
  return(
    <div>
      <h1>Home Page</h1>
      <p>This is the home page content.</p>
      <p>Current Location: {location.pathname}</p>
    </div>
  );
}

function About(){
  const location = useLocation();
  console.log('About location:', location);
  return(
    <div>
      <h1>About Page</h1>
      <p>This is the about page content.</p>
      <p>Current Location: {location.pathname}</p>
    </div>
  );
}

export default App;
```