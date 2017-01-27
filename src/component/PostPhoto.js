import React, { Component } from 'react'

import Dropzone from 'react-dropzone'

class PostPhoto extends Component {

    constructor() {
      super()

      this.state = {
        files: []
      }
    }

    onDrop = (files) => {
      this.setState({
        files: files
      })
    }

    onOpenClick = () => {
      this.dropzone.open()
    }

    render() {
      return (
        <div>
          <Dropzone ref={(node) => { this.dropzone = node }} onDrop={this.onDrop}>
              <div>Try dropping some files here, or click to select files to upload.</div>
          </Dropzone>
          <button type="button" onClick={this.onOpenClick}>
              Open Dropzone
          </button>
          {this.state.files.length > 0 ? <div>
          <h2>Uploading {this.state.files.length} files...</h2>
          <div>{this.state.files.map((file) => 
                  (<img 
                      key={file.preview} 
                      src={file.preview} 
                      alt="aa" 
                      class="img-thumbnail"
                      />) )
              }</div>
          </div> : null}
        </div>
      )
    }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     file: '',
  //     imagePreviewUrl: ''
  //   };
  // }

  // handleImageChange = (e) => {
  //   e.preventDefault();

  //   let reader = new FileReader();
  //   let file = e.target.files[0];

  //   reader.onloadend = () => {
  //     this.setState({
  //       file: file,
  //       imagePreviewUrl: reader.result
  //     });
  //   }

  //   reader.readAsDataURL(file)
  // }

  // render() {
  //   let {imagePreviewUrl} = this.state;
  //   let $imagePreview = null;
  //   if (imagePreviewUrl) {
  //     $imagePreview = (<img src={imagePreviewUrl} alt="" />);
  //   }

  //   return (
  //     <div>
  //       <form onSubmit={this._handleSubmit}>
  //         <input type="file" onChange={this.handleImageChange} />
  //       </form>
  //       {$imagePreview}
  //     </div>
  //   )
  // }

}

export default PostPhoto