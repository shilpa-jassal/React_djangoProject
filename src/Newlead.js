import React,{Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import './Newlead.css';
import {Row ,Col} from 'reactstrap';
 
class Newlead extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
        this.submitHandler=this.submitHandler.bind(this);
        this.getData=this.getData.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    };
    getData()
    {
    fetch("http://localhost:8000")
    .then((Response)=>
    Response.json())
    .then((findresponse)=>
    {
        console.log(findresponse )
        this.setState({
            data:findresponse
            })
        })
    }

    submitHandler = e => {
        axios.post('http://127.0.0.1:8000/',
            {
            "title":this.refs.title.value,
            "description":this.refs.description.value,
            "source":this.refs.source.value,
            "url": this.refs.url.value,
            "domain":this.refs.domain.value,
            "tags":this.refs.tags.value,
            "technology":this.refs.technology.value,
            "assignto": this.refs.assignto.value,
            "estimatedbudget":this.refs.estimatedbudget.value,
            "referredby":this.refs.referredby.value,
            //Attachment: '',
            "fullname":this.refs.fullname.value,
            "email":this.refs.email.value,
            "company":this.refs.company.value,
            "designation":this.refs.designation.value,
            "skypeid":this.refs.skypeid.value,
            "streetaddress":this.refs.streetaddress.value,
            "city":this.refs.city.value,
            "state":this.refs.state.value,
            "country":this.refs.country.value,
            "phone":this.refs.phone.value,
            "status" : "New",
            }
            )
			.then(response => {
			console.log(response)
			})
			.catch(error => {
			console.log(error)
            })
        }
    handleSubmit(){
          this.refs.title.value="";
          this.refs.description.value="";
          this.refs.source.value="";
          this.refs.url.value="";
          this.refs.domain.value="";
          this.refs.tags.value="";
          this.refs.technology.value="";
          this.refs.assignto.value="";
          this.refs.estimatedbudget.value="";
          this.refs.referredby.value="";
          this.refs.fullname.value="";
          this.refs.email.value="";
          this.refs.company.value="";
          this.refs.designation.value="";
          this.refs.skypeid.value="";
          this.refs.streetaddress.value="";
          this.refs.city.value="";
          this.refs.state.value="";
          this.refs.country.value="";
          this.refs.phone.value="";
        }
    render() {
        return (
            <div>
                {
                this.state.data.map((dynamicData,key)=>
                {
                if (dynamicData.email === this.refs.email.value) {
                return (
                    <div key={key}> 
                        {
                            this.refs.fullname.value=dynamicData.fullname,
                            this.refs.streetaddress.value=dynamicData.streetaddress,
                            this.refs.email.value=dynamicData.email,
                            this.refs.city.value=dynamicData.city,
                            this.refs.company.value=dynamicData.company,
                            this.refs.state.value=dynamicData.state,
                            this.refs.designation.value=dynamicData.designation,
                            this.refs.country.value=dynamicData.country,
                            this.refs.skypeid.value=dynamicData.skypeid,
                            this.refs.phone.value=dynamicData.phone
                        }
                    </div>
                         )
                        }})
                }

                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <div>
                            <h4>New Lead</h4>
                        </div>
                    </Col>
                    
                </Row>
                <form method="post" onSubmit={this.submitHandler} ref={form => this.form = form}>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                            <div>
                            <label for="myid">Title*</label><br></br>
                            <input type="text" ref="title" className="title"/><br></br>
                            </div>
                    </Col><br></br>
                    <Col sm={{ size: 'auto', offset: 4 }} className="Source">
                    <div>
                            <label for="source" className="Source">Source*</label><br></br>
                            <select  ref="source" id="Source" className="Source">
                            <option>choose any one</option>
                            <option select>java</option>
                            <option select>php</option>
                            </select>
                          
                    </div>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                            <div>
                            <lable>Description</lable><br></br>
                            <textarea type="text" ref= "description" className="Description" /><br></br>
                             </div>
                    </Col>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <div>
                        <label for="url">URL</label><br></br>
                        <input type="text" id="url"  ref="url" className="URL" /><br></br>
                        <label for="domain">Domain</label><br></br>
                        <select id="domain"  
                        ref="domain"  className="Domain">
                            <option >choose any one</option>
                            <option select>yahoo</option>
                            <option select>google</option>
                        </select><br></br>
                        <label for="keywords">Keywords/Tags</label><br></br>
                        <input type="text" id="keywords" 
                        ref="tags" className="Keywords"/><br></br>
                         </div>
                    </Col>
                    
                </Row><br></br>
                <Row>  
                    <Col sm={{ size: 'auto', offset: 1 }}>    
                        <div>
                            <label for="attechment">Attechment</label>
                            <input type="file" id="attechment" 
                            ref="attachment" className="Attechment"/>
                        </div><br></br>
                        
                    </Col>
                    <Col sm={{ size: 'auto', offset: 4 }}>
                        <div>
                            <div className="Technology">
                                <label for="technology" className="Technology">Technology</label><br></br>
                                <select id="technology"  ref="technology"
                                 className="Technology">
                                <option >choose any one</option>
                                <option select>python</option>
                                <option select>nodejs</option>
                                </select>
                            </div>
                            </div>
                    </Col>
                </Row>
                <Row> 
                    <Col sm={{ size: 'auto', offset: 1 }}>  
                        <div>
                            <label for="estimated">Estimated Budget ($)</label> 
                            <input type="text" id="estimated" ref="estimatedbudget" className="Estimatedbudget"/>
                        </div><br></br>
                        <div>
                            <label for="referred">Referred By</label>   
                            <input type="text" id="referred" ref="referredby" className="Referredby"/>
                        </div><br></br>
                    </Col>
                    <Col sm={{ size: 'auto', offset: 3 }} >
                        <div>
                            <label for="Assigne" className="assignee" >Assignee*</label><br></br>
                            <input type="radio" className="assignee"/>
                            <label for="Assignee" >Assign To</label>
                            <select   ref="assignto" 
                            id="Assignee" className="Assignto">
                            <option >choose any one</option>
                            <option select>abc</option>
                            <option select>def</option>
                            </select>
                            </div>
                    </Col>
                </Row>
                <Row>
                <Col sm={{ size: 'auto', offset: 2 }}>
                <div className="prospectdetails">
                    <p>Prospect Details</p>
                </div>
                </Col>
                    <Col className="Existing">
                    <button type="button" class="btn btn-link" onClick={this.getData}>Existing?</button>
                    </Col>
                </Row>
                <div className="prospectus"><br></br>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                        <div>
                            <label for="fullname">Full Name</label>
                            <input type="text" id="fullname"  className="Fullname" ref="fullname"/>
                        </div>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <div>
                            <label for="streetaddress">Street Address</label>
                            <input type="text" id="streetaddress"  
                              className="Sreetaddress" ref="streetaddress"/>
                            </div>
                        </Col>
                    </Row><br></br>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <div>
                            <label for="email" >Email</label>
                             
                            <input type="text" ref="email" id="email" className="Email"/>
                            <button type="button" className="add-icon" onClick={this.addValue}>+</button>
                         </div>
                        </Col>
                        <Col className="City" >
                            <div>
                            <label for="city">City</label>
                            <input type="text" ref="city" id="city" className="City"/>
                        </div>
                        </Col>
                    </Row><br></br>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <div>
                       
                            <label for="company">Company</label>
                            <input type="text"  ref="company" className="Company"/>
                                 
                                 </div>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <div>
                            <label for="state">State</label>
                            <input type="text" ref="state" className="State"/>
                            </div>
                        </Col>
                    </Row><br></br>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <div>
                            <label for="designation">Designation</label>
                            <input type="text" ref="designation" id="designation" className="Designation"/>
                            </div>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <div>
                            <label for="country">Country</label>
                            <input type="text"  ref="country" id="country" className="Country"/>
                            </div>
                        </Col>
                    </Row><br></br>
                    <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <div>
                            <label for="skypeid">Skype ID</label>
                            <input type="text"  ref="skypeid" className="Skypeid"/>
                            </div>
                        </Col>
                        <Col sm={{ size: 'auto', offset: 1 }}>
                            <div>
                            <label for="phone">Phone</label>
                            <input type="text" ref="phone" id="phone" className="mobileno"/>
                            <button className="add-icon" id="phone" type="button">+</button>
                            <div style={{color: "red",fontSize: "14px"}} className="errorMsg"></div>
                            </div> 
                        </Col>
                    </Row>
                </div><br></br>
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <div >
                            <button type="button" class="btn btn-primary" value="submit">Submit and New</button>
                        </div>
                    </Col>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                    <div>
                            <button type="submit" class="btn btn-primary" value="submit" onClick={this.handleSubmit} >Submit</button>
                        </div>
                    </Col>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <div >
                            <button type="button"  class="btn btn-danger"  value="Cancel"  >Cancel</button>
                        </div>
                    </Col>
                </Row>
                </form>
            </div>
           
            
        )
        }
}

export default Newlead;