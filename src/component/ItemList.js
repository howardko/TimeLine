import React, { Component } from 'react'

import ItemAdd from './ItemAdd'
import Item from './Item'

class ItemList extends Component {
  render(){
    const {items, onItemAdd, onTitleDoubleClick, onTitleUpdate} = this.props
    const elements = items.map((item, index) => (
        <Item
          key={item.id}
          content={item.content}
          title={item.title}
          isTitleEditing={item.isTitleEditing}
          onTitleDoubleClick={() => {onTitleDoubleClick(index)}}
          onTitleUpdate={(title) => onTitleUpdate(title, index)}
          detailedLink={item.detailedLink}
          time={item.time}
          imageFile={item.imageFile}
          imageAlt={item.imageAlt}
        />
      )
    )
    return (
      <section id="cd-timeline" className="cd-container">
          <ItemAdd onItemAdd={onItemAdd} />
          {elements}
      </section>
    )
  }
}

export default ItemList