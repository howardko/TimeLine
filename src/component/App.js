import React, { Component } from 'react'
import '../style/bootstrap.min.css'
import '../style/App.scss'

import PostList from './PostList'

class App extends Component {
  constructor() {
    super()

    this.state = {
      posts: []
    }
  }

  handleTitleUpdate = (title, index) => {
        const newPosts = [...this.state.posts]
        newPosts[index].title = title
        newPosts[index].isTitleEditing = false
        this.setState({
          posts: newPosts,
        })
    }

  handleTitleDoubleClick = (index) => {
        const newPosts = [...this.state.posts]
        newPosts[index].isTitleEditing = !newPosts[index].isTitleEditing
        this.setState({
          posts: newPosts,
        })
    }

  handleContentUpdate = (content, index) => {
        const newPosts = [...this.state.posts]
        newPosts[index].content = content
        newPosts[index].isContentEditing = false
        this.setState({
          posts: newPosts,
        })
    }

  handleContentDoubleClick = (index) => {
        const newPosts = [...this.state.posts]
        newPosts[index].isContentEditing = !newPosts[index].isContentEditing
        this.setState({
          posts: newPosts,
        })
    }

  handlePostAdd = (aPost) => {
      let id = +new Date()
      let date = new Date();
      let time = (date.getMonth() + 1) + "/" + date.getDate() + ":" + date.getHours();
      let detailedLink = "http://localhost/post/" + id
      let imageFile = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg"
      let imageAlt = "location"
      let Post = Object.assign({}, {id, time, detailedLink, imageFile, imageAlt}, aPost)
      const newPosts = [Post, ...this.state.posts ]

      //按下enter後，加到列表項目中並清空輸入框
      this.setState({
        posts: newPosts,
      })
  }

  render() {
    return (
      <div className="App">
        <PostList 
          posts={this.state.posts} 
          onPostAdd={this.handlePostAdd}
          onTitleUpdate={this.handleTitleUpdate} 
          onTitleDoubleClick={this.handleTitleDoubleClick}
          onContentUpdate={this.handleContentUpdate} 
          onContentDoubleClick={this.handleContentDoubleClick}
        />
      </div>
    );
  }
}

export default App;
