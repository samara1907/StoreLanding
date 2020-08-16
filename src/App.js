import React, {Component} from 'react';
import NavbarPage from './components/NavbarPage/NavbarPage';
import Slider from './components/Slider/Slider';
import Scroll from './components/Scroll/Scroll';
import CardList from './components/Card/CardList';
import searchBox from './components/searchBox';
import {products} from './components/Card/products';
import Footer from './components/Footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';


class App extends Component{

  render() {
    return (
          <div className="App">
          <NavbarPage NavbarPage={NavbarPage} />
          <Slider Slider={Slider}/>
           <searchBox products={products}/>
          <div>
           <Scroll>
            <CardList products={products}/>
          </Scroll>
          </div>
          <div>
          <Footer />
          </div>
          </div>
        );
    }
}
  
  
export default App;
