import React, { Component } from 'react';
import './App.css';
import { CatLoader } from './CatLoader';
import { Categories } from './Categories';
import { CatList } from './CatList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>Cat-egory</h2>
        <CatLoader />
        <Categories />
        <CatList />
      </div>
    );
  }
}

export default App;
