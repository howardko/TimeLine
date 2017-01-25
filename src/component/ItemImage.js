import React from 'react'

const ItemImage = ({ imageFile, imageAlt }) => (
   <div className="cd-timeline-img cd-picture">
      <img src={imageFile} alt={imageAlt} />
   </div>
)

export default ItemImage