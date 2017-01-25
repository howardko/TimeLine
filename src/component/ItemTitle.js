import React from 'react'

const ItemTitle = ({title, onTitleDoubleClick}) => (
   <h2
    onDoubleClick={onTitleDoubleClick}>
    {title}
    </h2>
)

export default ItemTitle