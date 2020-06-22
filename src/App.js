import React from 'react';
import './App.css';
import Card from './components/card';

class App extends React.Component {
  
  state = {
    avatarId: 50
  }

  changeAvatar = () => {
    this.setState({
      avatarId: 43
    })
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <Card name="Rick Sanchez" job="scientist" avatarId={this.state.avatarId} />
          <Card name="Morty Smith" job="student" avatarId={28} />
          <Card name="Gerry Smith" job="eat apples" avatarId={47} />
        </div>
        <div className="row">
          <div className="col-md-3">
            <a onClick={this.changeAvatar} className="changeAvatar" href="#">Change Avatar</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;