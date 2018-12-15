import React, { Component } from 'react';
import './markdown-previewer.css';
import {Grid, Row, Col} from 'react-flexbox-grid'; 

let marked = require("marked");
marked.setOptions({
    gfm: true,
    breaks: true,
});

const renderer = new marked.Renderer();

renderer.link = function(href, title, text)  {
    return `<a target="_blank" href="${href}">${text}` + '</a>';
}

//TODO -  list, blockquote, image, bolded text
const placeholder = "# This is a heading"
                    +  "\n ## This is a subheading"
                    + "\n [This](www.google.com) is a link"
                    + "\n ` here is some inline code` "
                    + "\n \`\`\` and this is a block of multiline code"
                    + "\n another line"
                    + "\n another line \`\`\`"
                    + "\n * list item 1"
                    + "\n * list item 2"
                    + "\n > This is a blockquote!"
                    + "\n Here is a cat:  \n![a cat picture](https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=150)"
                    + "\n **and finally here is some bolded text**"

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
            <Grid fluid>
                <h1 id="title">Markdown Previewer</h1>
                <Row>
                    <Col xs={12} md={6}>
                        <h3>Input: </h3>
                        <div id="editor">
                            <textarea value={this.state.markdown} onChange={this.handleChange} />
                        </div>
                    </Col>
                    <Col xs={12} md={6} >
                        <h3>Output: </h3>
                        <div id="preview">
                            <div dangerouslySetInnerHTML = {{__html: marked(this.state.markdown)}}></div>
                        </div>
                    </Col>
                </Row>
                
            </Grid>
            
        )
    }
}

export default MarkdownPreviewer;