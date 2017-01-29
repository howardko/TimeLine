import React, { Component } from 'react'

import PostTitle from './PostTitle'
import PostMessage from './PostMessage'
import PostPhoto from './PostPhoto'
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
    const { isTitleEditing, isContentEditing, detailedLink, time, photos } = this.props
    const titleDisplay = (!isTitleEditing) ? this.renderTitleViewMode() : this.renderTitleEditMode()
    const contentDisplay = (!isContentEditing) ? this.renderContentViewMode(): this.renderContentEditMode()
    return(
    <div className="cd-timeline-content">
        {titleDisplay}
        {contentDisplay}
        <PostPhoto photos={photos} />
        <a href={detailedLink} className="cd-read-more" style={{margin: "5px"}} >Read more</a>
        <span className="cd-date">{time}</span>
    </div>)
  }
}

export default PostContent