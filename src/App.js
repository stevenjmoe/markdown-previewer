import React, { Component } from 'react';
import './App.css';
import MarkdownPreviewer from './markdown-previewer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MarkdownPreviewer />       
      </div>
    );
  }
}

export default App;
