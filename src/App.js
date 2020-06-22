import React from 'react';
import './App.css';
import Card from './components/card';

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src="https://i.pravatar.cc/150?img=47" alt="" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Card />
          </div>
          <div className="col-md-4">
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default App;