import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MarkdownPreviewer from './markdown-previewer';
import {Helmet} from "react-helmet";

let marked = require("marked");
class App extends Component {
  render() {
    return (
      <div className="App container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Markdown Previewer</title>

        </Helmet>
        <MarkdownPreviewer />       
      </div>
    );
  }
}

export default App;
