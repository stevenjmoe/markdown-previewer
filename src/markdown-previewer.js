import React, { Component } from 'react';
import './markdown-previewer.css';



class MarkdownPreviewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",

        }
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(i) {
        this.setState({
            userInput: i.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Markdown Previewer</h1>
                <textarea value={this.state.userInput} onChange={this.handleChange} id="editor"></textarea>
                <div id="preview">
                    <h2>Preview</h2>
                    {this.state.userInput}
                </div>
            </div>
            
        )
    }
}

export default MarkdownPreviewer;