import React, { Component } from 'react'

class ItemAdd extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      content: '',
      detailedLink: '',
      time: ''
    }
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleContentChange = (e) => {
    this.setState({ content: e.target.value });
  }

  handleSubmitOnclick = (onItemAdd) => {
    const item = {
      title: this.state.title,
      content: this.state.content,
      isTitleEditing: false,
      isContentEditing: false
    }
    onItemAdd(item)
    this.setState({ content: '', title: '' });
  }

  render() {
    const {onItemAdd} = this.props
    return(
      <div className="cd-timeline-content">
          <div className="well clearfix">
            <input type="text" 
                    placeholder="Title (required)"
                    value={this.state.title}
                    className="form-control message"
                    onChange={this.handleTitleChange} 
            /><br/>
            <textarea className="form-control"
                      value={this.state.content}
                      placeholder="Message"
                      onChange={this.handleContentChange}
            /><br/>
            <button className="btn btn-primary pull-right"
                    onClick={() => this.handleSubmitOnclick(onItemAdd)}
            >Summit</button>
            <button className="js-add-photo-button btn btn-default pull-right">Add Photo</button>
          </div>
        </div>
    )
  }
}
export default ItemAdd