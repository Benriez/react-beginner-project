import React from 'react';
import './App.css';
import Card from './components/card';

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <Card name="Rick Sanchez" job="scientist" />
          <Card name="Morty Smith" job="student" />
          <Card name="Gerry Smith" job="eat apples" />
        </div>
      </div>
    );
  }
}

export default App;