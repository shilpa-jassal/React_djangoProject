import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
 
import axios from 'axios';
class Login extends React.Component{
  constructor() {
    super();
    let loggedIn = false
    this.state = {
      fields: {},
      errors: {},
      data:[],
      username:'',
      password:'',
      loggedIn
    }
  this.handleChange = this.handleChange.bind(this);
  this.submitHandler=this.submitHandler.bind(this);
};


handleChange(event) {
    this.setState({[event.target.name]:event.target.value});
   
    }  


submitHandler(){
  this.state.data.map((dynamicData,key)=>
      <div>
      <span>{dynamicData.id}</span>
      <span>{dynamicData.emailid}</span>
      <span>{dynamicData.password}</span>
      </div>
      )
    }
submitForm(e){
  console.log("am here")
  axios.post('http://localhost:8001/core/users/',
        {
         "username":this.state.username,
         "password":this.state.password
        }
        )
  .then(response => {
  console.log(response.token)
  })
  .catch(error => {
  console.log(error)
        })
}  

componentDidMount() {
  fetch("http://localhost:8000/Login/")
  .then((Response)=>
  Response.json()).then((findresponse)=>
  {
      console.log(findresponse)
      this.setState({
          data:findresponse
      })
  })
   
    }
   
 
render(){
    

return(
      <div>
      <Form method="post" onSubmit={this.SubmitForm}>
      <FormGroup>
        <Label for="Username">Username</Label>
        <Input type="username" name="username" id="Username" placeholder="Enter your Username" value={this.state.username} onChange={this.handleChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="Password">Password</Label>
        <Input type="password" name="password" id="Password" placeholder="Enter your password" value={this.state.password} onChange={this.handleChange}/>
      </FormGroup>

      <Button type="submit" onClick={this.submitHandler}>Submit</Button> 
      </Form>
     </div>
 
  );
}
}
export default Login;