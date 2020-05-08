import React, {Component} from "react"





class Profile extends Component {
  
  constructor(props){
    super(props)
    this.state={
      username: '',
      Email: '',
      Phone: '',
      gender: 'Male'
    }

  }
 
  handleUsernameChange=event=>{
    this.setState({
      username: event.target.value  
    })
  }
    handleEmailChange=event=>{
      this.setState({
        Email: event.target.value  
      })
  }
  handlePhoneChange=event=>{
    this.setState({
      Phone: event.target.value  
    })
}
handleGenderChange=event=>{
  this.setState({
    gender: event.target.value  
  })
}
handleSubmit=event=>{
  alert(`${this.state.username} ${this.state.Email} ${this.state.gender} ${this.state.Phone}`)
  event.preventDefault()
}

  render(){
    return(
      <div>
      <header className="Profile1">
      

      <div className="Profile">
      
      <form onSubmit={this.handleSubmit}>
      <div class="form-group" className="user">
        
        
        <p>.</p>

        <label class="control-label col-sm-2"><strong><p></p>   Username: </strong> </label>
        <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
        <input  type='text' 
                
                placeholder="Username"
                value={this.state.username} 
                onChange={this.handleUsernameChange}/>
                
        </div>
        <div>
          <label class="control-label col-sm-2"><strong>Email Adress: </strong> </label>
          <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
          <input type='text'
                
                placeholder="Email Adress"
                value={this.state.Email}
                onChange={this.handleEmailChange}/>
        </div>
        <div>
          <label class="control-label col-sm-2"><strong>Phone Number:</strong>  </label>
          <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
          <input type='text'
                
                placeholder="Phone Number"
                value={this.state.Phone}
                  onChange={this.handlePhoneChange}/>
        </div>
        <div>
          <label class="control-label col-sm-2"><strong>gender: </strong> </label>
          <select value={this.state.gender} onChange={this.handleGenderChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div> 
        
        
        <Button
        type="submit"
        >
        submit
      </Button>
       
      </form>
      </div>
      </header>
      </div>
      
    )
  }
}
export default Profile