import React, { Component } from 'react'
import '../style/App.scss'
import '../style/bootstrap.css'

import ItemList from './ItemList'

// const defaultItems = [
//   {
//       id: "1",
//       title: "Test title 1",
//       content: "Test content 1",
//       detailedLink: "http://localhost/",
//       time: "Jan 1",
//       imageFile: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg",
//       imageAlt: "picture"
//   },
//   {
//       id: "2",
//       title: "Test title 2",
//       content: "Test content 2",
//       detailedLink: "http://localhost/",
//       time: "Jan 2",
//       imageFile: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg",
//       imageAlt: "picture"
//   }
// ]

class App extends Component {
  constructor() {
    super()

    this.state = {
      items: []
    }
  }

  handleTitleUpdate = (title, index) => {
        const newItems = [...this.state.items]
        newItems[index].title = title
        newItems[index].isTitleEditing = false
        this.setState({
          items: newItems,
        })
    }

  handleTitleDoubleClick = (index) => {
        const newItems = [...this.state.items]
        newItems[index].isTitleEditing = !newItems[index].isTitleEditing
        this.setState({
          items: newItems,
        })
    }

  handleItemAdd = (aItem) => {
      let id = +new Date()
      let date = new Date();
      let time = (date.getMonth() + 1) + "-" + date.getDate();
      let detailedLink = "http://localhost/post/" + id
      let imageFile = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg"
      let imageAlt = "location"
      let item = Object.assign({}, {id, time, detailedLink, imageFile, imageAlt}, aItem)
      const newItems = [item, ...this.state.items ]

      //按下enter後，加到列表項目中並清空輸入框
      this.setState({
        items: newItems,
      })
  }

  render() {
    return (
      <div className="App">
        <ItemList 
          items={this.state.items} 
          onItemAdd={this.handleItemAdd}
          onTitleUpdate={this.handleTitleUpdate} 
          onTitleDoubleClick={this.handleTitleDoubleClick}
        />
      </div>
    );
  }
}

export default App;
