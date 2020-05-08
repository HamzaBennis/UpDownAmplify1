import React, { Component } from 'react'

import {Storage} from 'aws-amplify'

class Home extends Component{
  state={fileUrl:'', file:'', filename:''}
  handleChange=e=>{
    const file=e.target.files[0]
    this.setState({
      fileUrl: URL.createObjectURL(file),
      file,
      filename: file.name
    })
    this.listFiles=this.listFiles.bind(this)
  }
  uploadFile=()=>{
    Storage.put(this.state.filename, this.state.file)
    .then(()=>{
      console.log('succesfully saved file !')
      this.setState({fileUrl: '', file: '', filename: ''})
    })
  }
  listFiles(){
    var tableau= [this.state.filename]
    return(
      <div>
        <h1>les fichiers upload sont:</h1>
        <p>{tableau}</p>
      </div>
    )
  }

  
  removeFile=()=>{
    Storage.remove(this.state.filename)
    .then(()=>{
      console.log('succesfully remove file !')
      this.setState({fileUrl: '', file: '', filename: ''})
    })
  }

  render(){

    return(
      <div className="Home12">
        <input type='file' onChange={this.handleChange}/>
        <img src={this.state.fileUrl} />
        <button onClick={this.uploadFile}>save File</button>
        <button onClick={this.removeFile}>remove File</button>
        <listFiles/>
        </div>
    );
  }
}

export default Home