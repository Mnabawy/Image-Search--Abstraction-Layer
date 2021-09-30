import React from 'react'

import './App.css';
import Images from './components/Images';




class App extends React.Component {
  state = {
    url: "",
  }

  handleCallBack = (childData) => {
    this.setState({ url: childData })
  }

  componentDidMount() {
    this.handleCallBack()
  }

  render() {
    return (
      <div className="App" >
        <h1>Image Search Abstraction Layer</h1>
        <hr />
        <p>Search the web for images or see recent searches</p>

        <Images parentCallback={this.handleCallBack} />

      </div>
    );
  }
}

export default App;
