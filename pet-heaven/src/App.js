import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import Home from './containers/Home';
import DogList from './containers/DogList';
import DogDetails from './components/DogDetails';
import CatList from './containers/CatList';
import AdoptionForm from './containers/AdoptionForm';
import Release from './containers/Release';
import About from './containers/About';
import Login from './containers/Login';
import Signup from './containers/Signup';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dog" element={<DogList />} />
            <Route path="/cat" element={<CatList />} />
            <Route path="/dogdetails/:id" element={<DogDetails />} />
            <Route path="/adoption" element={<AdoptionForm />} />
            <Route path="/release" element={<Release />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
