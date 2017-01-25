import React, { Component } from 'react'

import ItemContent from './ItemContent'
import ItemImage from './ItemImage'

class Item extends Component { 
  render(){
    const { title, isTitleEditing, onTitleDoubleClick, onTitleUpdate, content, time, detailedLink, imageFile, imageAlt } = this.props
    return(
      <div className="cd-timeline-block">
        <ItemImage 
          imageFile={imageFile}
          imageAlt={imageAlt}
        />
        <ItemContent 
          title={title}
          content={content}
          time={time}
          detailedLink={detailedLink}
          isTitleEditing={isTitleEditing}
          onTitleDoubleClick={onTitleDoubleClick}
          onTitleUpdate={onTitleUpdate}
        /> 
      </div>
    )
  }
}

export default Item