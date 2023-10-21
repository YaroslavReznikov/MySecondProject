import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FullBlogView from "./fullBlogView";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element = {<Create/>} />
            <Route path="/blogs/:id" element = {<FullBlogView/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
