import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import LMSSystem1 from './LMSSystem1';

class Pitched1 extends React.Component{
     
    render(){
        return(
            <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                         
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
        </Modal.Dialog>

        )
    }
}
export default Pitched1;
<div>
                <h3>Comment</h3>
                <textarea className="ne">
                </textarea><br></br>
                <Row >
                    <Col>
                        <button type="button" className="addtocalender">Add To Calender?</button>
                    </Col>
                    <Col>
                        <button type="submit" className="sub">Submit</button>
                    </Col>
                </Row>
                
            </div>