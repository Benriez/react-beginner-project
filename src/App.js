import React from 'react';
import './App.css';
import Card from './components/card';

class App extends React.Component {
  
  state = {
    avatarId: 50,
    personName: 'Rick Sanchez'
  }

  changeAvatar = () => {
    this.setState({
      avatarId: 43,
      personName: "Summer Smith"
    })
  }




  render () {
    return (
      <div className="container">
        <div className="row">
          <Card name={this.state.personName} job="scientist" avatarId={this.state.avatarId} />
          <Card name="Morty Smith" job="student" avatarId={28} />
          <Card name="Gerry Smith" job="eat apples" avatarId={47} />
        </div>
        <div className="row">
          <div className="col-md-3">
            <a onClick={this.changeAvatar} className="changeAvatar" href="#">Change Details</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;