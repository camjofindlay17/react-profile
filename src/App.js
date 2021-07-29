import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer'

import portfolios from './assets/data/portfolio'

function App() {
  return (
<BrowserRouter>
  <div class="container">
    <Header />
    <Switch>
      <Route exact path={["/about", "/"]}>
        <About />
      </Route>
      <Route exact path="/portfolio">
        <Portfolio portfolios = {portfolios} />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/resume">
        <Resume />
      </Route>
    </Switch>
    <Footer />
  </div>
</BrowserRouter>
  )
}

export default App;