import React, { Component } from 'react'

import PostContent from './PostContent'
import PostImage from './PostImage'

class Post extends Component { 
  render(){
    const { title, isTitleEditing, onTitleDoubleClick, onTitleUpdate, 
            content, isContentEditing, onContentDoubleClick, onContentUpdate,
            time, detailedLink, imageFile, imageAlt } = this.props
    return(
      <div className="cd-timeline-block">
        <PostImage 
          imageFile={imageFile}
          imageAlt={imageAlt}
        />
        <PostContent 
          title={title}
          isTitleEditing={isTitleEditing}
          onTitleDoubleClick={onTitleDoubleClick}
          onTitleUpdate={onTitleUpdate}
          content={content}
          isContentEditing={isContentEditing}
          onContentDoubleClick={onContentDoubleClick}
          onContentUpdate={onContentUpdate}
          time={time}
          detailedLink={detailedLink}
        /> 
      </div>
    )
  }
}

export default Post