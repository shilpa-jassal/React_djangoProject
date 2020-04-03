import React,{Component} from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Comment.css';

class Comment extends Component{
  constructor(props){
    super(props);

    this.onHide = this.onHide.bind(this);
  }
  
  onHide(){
    this.props.onHide();
  }
   
    render(){
      return(
        <div>
  
 
 
       
      <Button variant="danger" onClick={this.onHide} >Close</Button>
      
 
      </div>        
       
      
       
        )
    }
}
export default Comment;