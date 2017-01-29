import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

class PostAdd extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      content: '',
      detailedLink: '',
      time: '',
      files: [],
      dropZoneStyle: { display: "none"},
      textAreaStyle: { display: "block"}
    }
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleContentChange = (e) => {
    this.setState({ content: e.target.value });
  }

  handleSubmitOnclick = (onPostAdd) => {
    const post = {
      title: this.state.title,
      content: this.state.content,
      files: this.state.files,
      isTitleEditing: false,
      isContentEditing: false
    }
    onPostAdd(post)
    this.setState({ content: '', title: '', files: [] });
  }

  handleOpenClick = () => {
      this.dropzone.open()
  }

  handleImageRemoveClick = (index) => {
      let newFiles = [...this.state.files]
      newFiles = newFiles.slice(0,index).concat(newFiles.slice(index+1))
      this.setState({
        files: newFiles
      })
  }

  handleDropzoneDrop = (files) => {
      const newFiles = [...files, ...this.state.files]
      this.setState({
        files: newFiles,
        dropZoneStyle: { display: "none" },
        textAreaStyle: { display: "block" }
      })
  }

  handleDragLeave = (e) => {
      e.preventDefault() 
      this.setState({
        dropZoneStyle: { display: "none" },
        textAreaStyle: { display: "block" }
      })
  }

  handleTextAreaDrop = (e) => {
      e.preventDefault()
      this.setState({
        dropZoneStyle: { display: "block" },
        textAreaStyle: { display: "none" }
      })
  }

  render() {
    const {onPostAdd} = this.props
    return(
      <div className="cd-timeline-content">
          <div className="well clearfix">
            <input type="text" 
                    placeholder="Title (required)"
                    value={this.state.title}
                    className="form-control message"
                    onChange={this.handleTitleChange} 
            /><br/>
            <Dropzone ref={(node) => { this.dropzone = node }} 
                        onDrop={this.handleDropzoneDrop} 
                        onDragLeave={this.handleDragLeave}
                        className="form-control" 
                        style={this.state.dropZoneStyle}>
                        Drag Images Here ...
                        </Dropzone>

            <textarea className="form-control"
                      value={this.state.content}
                      placeholder="Message"
                      style={this.state.textAreaStyle}
                      onDragOver={this.handleTextAreaDrop}
                      onChange={this.handleContentChange}
            /><br/>
            {
              this.state.files.length > 0 ? <div className="img-container">
                {this.state.files.map((file, index) => 
                  (<div key={ +new Date() + index } className="img-wrap">
                      <span onClick={() => {this.handleImageRemoveClick(index)}}
                            className="close">&times;</span>
                      <img 
                        key={file.preview} 
                        src={file.preview} 
                        alt={file.name} />
                  </div>)
                )}
              </div> : null}
            <button className="js-add-photo-button btn btn-default pull-right"
                    onClick={this.handleOpenClick}>
                    Add Photo
            </button>
            <button className="btn btn-primary pull-right"
                    onClick={() => this.handleSubmitOnclick(onPostAdd)}
            >Summit</button>
          </div>
        </div>
    )
  }
}
export default PostAdd