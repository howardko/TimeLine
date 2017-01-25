import React, { Component } from 'react'

import ItemMessage from './ItemMessage'
import ItemTitle from './ItemTitle'
import TitleEditForm from './TitleEditForm'

class ItemContent extends Component{

  renderViewMode() {
    const { title, onTitleDoubleClick } = this.props
    return(
      <ItemTitle 
        title={title} 
        onTitleDoubleClick={onTitleDoubleClick}
      />
    )
  }

  renderEditMode() {
    const { title, onTitleUpdate } = this.props
    return(
      <TitleEditForm 
        title={title} 
        onTitleUpdate={onTitleUpdate}
      />
    )
  }

  render()
  {
    const { isTitleEditing, content, detailedLink, time } = this.props
    const titleDisplay = (isTitleEditing) ? this.renderEditMode() : this.renderViewMode()
    return(
    <div className="cd-timeline-content">
        {titleDisplay}
        <ItemMessage content={content} />
        <a href={detailedLink} className="cd-read-more">Read more</a>
        <span className="cd-date">{time}</span>
    </div>)
  }
}

export default ItemContent