import React,{Component} from 'react';
 
// import {table} from 'react-bootstrape';
import 'bootstrap/dist/css/bootstrap.css';
import './LMSSystem1.css';
import {Modal,Button} from 'react-bootstrap';
import {Row ,Col } from 'reactstrap';

class LMSSystem1 extends Component{
    constructor(){
        super();
        this.state={
                data:[],
        }
    }
    componentDidMount(){
        fetch("http://localhost:8000/")
        .then((Response)=>
                Response.json())
                .then((findresponse)=>
                {
                    console.log(findresponse)
                    this.setState({
                        data:findresponse,
                    })
                })
    }
            render(){
                return(

                    <Modal
                        {...this.props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div>
                     
                            {
                        this.state.data.map((dynamicData,key)=>
                                            
                            {
                                if (dynamicData.Title === this.props.value3) {
                                    return (
                        <div className="lms1">
                                <h3>{this.props.value3}</h3>
                            <Row>
                                <Col>
                                    <p>Estimated Budget</p>
                                </Col>
                                <Col>
                                <p>{dynamicData.EstimatedBudget}</p>
                                </Col>
                                <Col>
                                    <p>  Edit </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="ad">
                                    <label for="txt">Add Remarks/Details</label>
                                    <textarea className="txtarea" id="txt" ></textarea>
                                </Col>
                            </Row><br></br>
                            <Row>
                                <label  forhtml="add" className="add">Attachment</label>
                                <input type="file" id="add"></input>
                            </Row><br></br>
                            </div>
                             )
                             }
                             })
                            }
                        </div>
                   
         
                     </Modal.Body>
                    <Modal.Footer>
                    <Button onClick={this.props.onHide}>SUBMIT</Button>
                    </Modal.Footer>
                </Modal>
                   
                )
            }
}
export default LMSSystem1;