import React from 'react';
import './App.css';
import Card from './components/card';

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <Card name="Rick Sanchez" job="scientist" avatarId={50} />
          <Card name="Morty Smith" job="student" avatarId={28} />
          <Card name="Gerry Smith" job="eat apples" avatarId={47} />
        </div>
      </div>
    );
  }
}

export default App;