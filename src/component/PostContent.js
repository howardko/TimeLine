import React, { Component } from 'react'

import PostMessage from './PostMessage'
import PostTitle from './PostTitle'
import TitleEditForm from './TitleEditForm'
import ContentEditForm from './ContentEditForm'

class PostContent extends Component{

  renderTitleViewMode() {
    const { title, onTitleDoubleClick } = this.props
    return(
      <PostTitle 
        title={title} 
        onTitleDoubleClick={onTitleDoubleClick}
      />
    )
  }

  renderTitleEditMode() {
    const { title, onTitleUpdate } = this.props
    return(
      <TitleEditForm 
        title={title} 
        onTitleUpdate={onTitleUpdate}
      />
    )
  }

  renderContentViewMode() {
    const { content, onContentDoubleClick } = this.props
    return(
      <PostMessage 
        content={content} 
        onContentDoubleClick={onContentDoubleClick}
      />
    )
  }

  renderContentEditMode() {
    const { content, onContentUpdate } = this.props
    return(
      <ContentEditForm 
        content={content} 
        onContentUpdate={onContentUpdate}
      />
    )
  }

  render()
  {
    const { isTitleEditing, isContentEditing, detailedLink, time } = this.props
    const titleDisplay = (!isTitleEditing) ? this.renderTitleViewMode() : this.renderTitleEditMode()
    const contentDisplay = (!isContentEditing) ? this.renderContentViewMode(): this.renderContentEditMode()
    return(
    <div className="cd-timeline-content">
        {titleDisplay}
        {contentDisplay}
        <a href={detailedLink} className="cd-read-more">Read more</a>
        <span className="cd-date">{time}</span>
    </div>)
  }
}

export default PostContent