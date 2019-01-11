import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import ItemPage from './pages/itemPage.js';
import ShippingOptionPage from './pages/shippingOptionPage.js';
import PromotionPage from './pages/promotionPage.js';
import SubmitOptionPage from "./pages/submitOptionPage.js";
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={HomePage} />
          <Route path="/itemPage" component={ItemPage} />
          <Route path="/promotionPage" component={PromotionPage} />
          <Route path="/shippingOptionPage" component={ShippingOptionPage} />
          <Route path="/submitOptionPage" component={SubmitOptionPage} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;