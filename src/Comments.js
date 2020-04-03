import React from 'react';
//import Attachment from './Attachment';
//import {Row,Col} from 'reactstrap';
import { Modal,Row,Col,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Comments.css';
import './Comment.css';
//import Comment  from './Comment';
import axios from 'axios';

const url="http://localhost:8000/comment";
class Comments extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           data:[],
          toggle13:false
         
        };
        this.toggle14=this.toggle14.bind(this);
      }
      
        componentDidMount(){
                fetch(url)
                .then((Response)=>
                Response.json())
                .then((findresponse)=>
                {
                console.log(findresponse)
                this.setState({
                data:findresponse
                })
                })
                }
      
      toggle14(e){
        this.setState({toggle13:!this.state.toggle13});
      }
    render(){

        let  CommentsModalClose=()=>this.setState({toggle13:false})
        console.log("this.props.id",this.props.id)
        return(
            <div className="bord" >

                <fieldset>
                <legend >Comment</legend>
                {
                    this.state.data.map((dynamicData )=>

                    {
                      if (dynamicData.accounts ===  this.props.id) {
                      return (
                        <div  >
                            <h1>hello</h1>
                        </div>
                          )
                    }})
                }
                <button type="submit" onClick={this.toggle14} >ADD</button>
                     <div>
                 <Comment show={this.state.toggle13} onHide={CommentsModalClose} id={this.props.id}/>
                    </div>
               </fieldset>
                
                
            </div>
        )
    }
}



class Comment extends React.Component{
        constructor(props) {
        super(props)
            this.state = {
            accounts:"",
            comment: ""
            }
         }

        changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
		this.setState({accounts:this.props.id})
		}
      submitHandler = e => {
		    e.preventDefault()

		    axios.post(url, this.state)
			  .then(response => {
				console.log(response);
			  })
			  .catch(error => {
				console.log(error);
			  })
      }

  render(){

    const {comment} = this.state
    return (

      <Modal {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Comment
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <form onSubmit={this.submitHandler}>
           <Row>
            <textarea type='text' name='comment' value={comment} onChange={this.changeHandler} className="ne" placeholder="Write Comment....."/>
            </Row>
            <div>
            <Button type="submit" varient='primary' className="submit" value="submit" onClick={this.props.onHide}>Submit</Button>
            </div>
           </form>
      </Modal.Body>

    </Modal>
     );
  }
}

export default Comments;