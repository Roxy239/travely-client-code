
import './App.css';
import Home from './components/Home/Home/Home'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound.js';

// import Booking from './components/Booking/Booking/Booking';
// import Login from './components/Login/Login/Login';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
// import AuthProvider from './contexts/AuthProvider';
// import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
// import Register from './components/Login/Register/Register';
// import About from './components/About/About';
// import Contact from './components/Contact/Contact';




function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute> */}
          {/* <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <PrivateRoute path="/contact">
              <Contact></Contact>

            </PrivateRoute> */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;


