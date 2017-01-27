import React, { Component } from 'react'

class ContentEditForm extends Component {

  render() {
    const { content, onContentUpdate } = this.props
    let contentField: any = null
    return (
      <div>
        <input
          type="text"
          defaultValue={content}
          ref={el => { contentField = el }}
          autoFocus
          onBlur={(e) => {
              onContentUpdate(contentField.value)
            }
          }
          onKeyPress={(e) => {
            if (contentField.value.trim()
                && e.key === 'Enter') {
                  e.preventDefault();  
                  onContentUpdate(contentField.value)
              }
            }
          }
        />
      </div>
    )
  }
}

export default ContentEditForm