import React, { Component } from 'react'

import PostAdd from './PostAdd'
import Post from './Post'

class PostList extends Component {
  render(){
    const { posts, onPostAdd, onTitleDoubleClick, onTitleUpdate,
            onContentDoubleClick, onContentUpdate} = this.props

    const elements = posts.map((post, index) => (
        <Post
          key={post.id}
          content={post.content}
          title={post.title}
          isTitleEditing={post.isTitleEditing}
          onTitleDoubleClick={() => {onTitleDoubleClick(index)}}
          onTitleUpdate={(title) => onTitleUpdate(title, index)}
          isContentEditing={post.isContentEditing}
          onContentDoubleClick={() => {onContentDoubleClick(index)}}
          onContentUpdate={(title) => onContentUpdate(title, index)}
          detailedLink={post.detailedLink}
          time={post.time}
          imageFile={post.imageFile}
          imageAlt={post.imageAlt}
        />
      )
    )
    return (
      <section id="cd-timeline" className="cd-container">
          <PostAdd onPostAdd={onPostAdd} />
          {elements}
      </section>
    )
  }
}

export default PostList