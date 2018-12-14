import React, { Component } from 'react';
import './markdown-previewer.css';

let marked = require("marked");
marked.setOptions({breaks: true});

//TODO -  list, blockquote, image, bolded text
const placeholder = 
"# This is a heading \n ## This is a subheading \n [This is an inline style link](www.google.com) \n This is inline code`<div></div>` \n and this is a code block \`\`\` function(param1, param2) \`\`\`"

class MarkdownPreviewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markdown: placeholder
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            markdown: event.target.value
        })
    }

    render() {
        return (
            <div>
                <p>Enter markdown</p>
                <textarea value={this.state.markdown} onChange={this.handleChange} id="editor">OI</textarea>
                <div id="preview">
                    <h1>Markdown output</h1>
                    <div dangerouslySetInnerHTML = {{__html: marked(this.state.markdown)}}></div>
                </div>
            </div>
            
        )
    }
}

export default MarkdownPreviewer;