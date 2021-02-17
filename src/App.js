import './App.css';
import NavBar from './components/navbar';
import LoginForm from "./components/login";
import RegisterForm from "./components/register";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <h1>Welcome to Easy Job Intern</h1>
      <Switch>
          <Route path="/login" exact component={LoginForm} />
          <Route path="/signup" exact component={RegisterForm} />
      </Switch>
      </Router>
      <AboutUs />
     <Footer/>
    </div>

    
  );
}

export default App;
