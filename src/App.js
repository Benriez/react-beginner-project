import React from 'react';
import './App.css';
import Card from './components/card';

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <Card name="Rick Sanchez"/>
          <Card name="Morty Smith" />
          <Card name="Gerry Smith" />
        </div>
      </div>
    );
  }
}

export default App;