import React,{Component} from 'react';
 
// import {table} from 'react-bootstrape';
import 'bootstrap/dist/css/bootstrap.css';
import './LMSSystem.css';
import { Row ,Col } from 'reactstrap';

class LMSSystem extends Component{
    constructor(){
        super();
        this.state={
                data:[],
        }
    }
    componentDidMount() {
        fetch("http://localhost:8000")
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
                 {
                 this.state.data.map((dynamicData,key)=>
                    {
                    if (dynamicData.title === this.props.value2) {
                    return (
                    <div key={key}>
                    <Col >
                        <Row>
                        <Col>
                            <h3>{dynamicData.title}  </h3>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 0 }} className="urlss"><p><a href={dynamicData.url} class="text-warning stretched-link">{dynamicData.url}</a></p></Col><br></br>
                        </Row><br></br>
                        <Row>
                            <Col>
                                <Row className="descriptions">
                                    <p>{dynamicData.description} </p>
                                </Row>
                                <br></br>
                                <Row className="prospect">
                                Prospect Details
                                </Row>
                                <Row className="details">
                                    <Col><p> {dynamicData.fullname}</p>
                                    <p>{dynamicData.email} </p>
                                    <p>{dynamicData.company} </p>
                                    <p>{dynamicData.skypeid} </p>
                                    </Col>
                                    <Col>
                                    <p className="live">{dynamicData.phone}</p>
                                    </Col>
                                </Row><br></br>
                                 
                                </Col></Row>
                    </Col>
                    <Col sm={{ size: 'auto', offset: 9 }} className="new">
                                    <div><br></br><h6 className="nw">{dynamicData.status}</h6></div><br></br>
                            <p>Tags</p>
                            <p>{dynamicData.tags}</p>
                           
                            <b>Domain</b>
                                <p>{dynamicData.domain}</p>
                            <b>Technology</b>
                             
                                <p>{dynamicData.technology}</p>
                    </Col>
                    
                    
                </div>
                            )
                        }
                })
                    }
            </div>
        )}
                }
                                              
             
export default LMSSystem;