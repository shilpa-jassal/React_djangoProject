import React,{Component} from 'react';
import {Modal,Button,Row,Col} from 'react-bootstrap';
import Reject from './Reject';
import LMSSystem from './LMSSystem';
import LMSSystem1 from './LMSSystem1';
import Comments from './Comments';
import axios from 'axios';
import './AddDepModel.css';
import Pitched from './Pitched';
class AddDepModal extends Component{
    constructor(props){
        super(props);

        console.log(this.props);
       this.state={
          toggle2: false,
          toggle4: false,
          toggle9: false,
          toggle11: false,

        }


       this.toggle3=this.toggle3.bind(this);
       this.toggle5=this.toggle5.bind(this);
       this.toggle10=this.toggle10.bind(this);
       this.toggle12=this.toggle12.bind(this);
    }


     
    toggle3(e){
         
        this.setState({ toggle2: !this.state.toggle2});
    }
    toggle5(e){
      this.setState({
      toggle4:!this.state.toggle4})

//        window.location.reload(false);
      	e.preventDefault()
            axios.put('http://127.0.0.1:8000/accounts/'+ this.props.id1+'/', {status: "Accepted",})
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			})
    }
    toggle10(e){
      this.setState({toggle9:!this.state.toggle9})
//      window.location.reload(false);
      	e.preventDefault()
            axios.put('http://127.0.0.1:8000/accounts/'+ this.props.id1+'/', {status: "Pitched",})
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			})
    }
    toggle12(e){
      this.setState({toggle11:!this.state.toggle11})
    }
    render(){
      let  LMSSystem1Close=()=>this.setState({toggle9:false})
      let  PitchedModalClose=()=>this.setState({toggle11:false})

      console.log("clicking on the accept button",this.props.value1,this.props.id1,this.props.status1)

      return( 
         

            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
 
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
          <div>

              <LMSSystem value2={this.props.value1}/>

                   {this.props.status1 === "Accepted" ?(
                                  <div>
                                  {
                                    this.state.toggle9 ? (
                                      <div>
                                        <Button  variant="primary">Response Generated</Button>
                                        <LMSSystem1 show={this.state.toggle9} onHide={LMSSystem1Close} value3={this.props.value1} />
                                        </div>

                                    ):(

                                      <div>
                                        <Comments id = {this.props.id1}/>
                                        <Row>
                                        <Col>
                                            Attachment
                                        </Col>
                                        <Col>

                                        </Col>
                                        <Col>
                                        <button type="button" class="btn btn-link" onClick={this.toggle12}>ADD</button>

                                        </Col>

                                        </Row>

                                        <Pitched show={this.state.toggle11} onHide={PitchedModalClose}/>
                                        <Button  variant="primary" onClick={this.toggle10}>Pitched </Button>
                                  </div> )
                      }

                        </div>
        ):(
        <div>
        {this.props.status1 === "Pitched" ?(
        <div>
         <Button  variant="primary">Response Generated</Button>
        </div>
        ):(


                  <div>
              {

                  this.state.toggle4  ? (
                                  <div>
                               {
                                  this.state.toggle9 ? (
                                    <div>
                                      <Button  variant="primary">Response Generated</Button>
                                      <LMSSystem1 show={this.state.toggle9} onHide={LMSSystem1Close} value3={this.props.value1} />
                                      </div>

                                    ):(
                                <div>
                                        <Comments id = {this.props.id1}/>
                                        <Row>
                                        <Col>
                                            Attachment
                                        </Col>
                                        <Col>

                                        </Col>
                                        <Col>
                                        <Button type="button" class="btn btn-link" onClick={this.toggle12}>ADD</Button>

                                        </Col>

                                        </Row>

                                        <Pitched show={this.state.toggle11} onHide={PitchedModalClose}/>
                                        <Button  variant="primary" onClick={this.toggle10}>Pitched </Button>
                                  </div> )
                              }
                              </div>):
                              (
                              <div>
                                 <Button  variant="primary" onClick={this.toggle5} className="ACC">Accept</Button>
                              <Button variant="danger" onClick={this.toggle3} className="REJ">Reject</Button>
                              <Reject show={this.state.toggle2} onHide={this.props.onHide} id={this.props.id1}/>
                              </div>
                              )}


                            </div>
                            )
                            }
                            </div>
                            )
                      }

                    </div>
            </Modal.Body>
            <Modal.Footer>
            
            </Modal.Footer>
            </Modal>

        )
    }
}
export default AddDepModal;