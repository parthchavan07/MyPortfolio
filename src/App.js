import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Middle from './Components/Middle';
import Contact from './Components/Contact';
import Upper from './Components/Upper';
import Footer from './Components/Bottom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={[<Upper/> ,<Middle/>,<Footer/>]}/>
          <Route exact path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;