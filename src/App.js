import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MarkdownPreviewer from './markdown-previewer';

let marked = require("marked");
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
