import React from 'react';
import {Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Container,Row,Col ,ListGroup, ListGroupItem} from 'reactstrap';
import './LeadDashboard.css';
import AddDepModal from './AddDepModel';
 
class LeadDashboard extends React.Component{
    constructor(props){
    super(props);
    const token=localStorage.getItem("token")
    console.log(token)
        let loggedIn = true
        if(token === ''){
            loggedIn = false
        }
        console.log("loggedin",loggedIn)

    this.state={
        data:[],
        toggle:false,
        value:"",
        id:"",
        name:'',
        loggedIn
    }

    this.toggleButton=this.toggleButton.bind(this);
    }

    toggleButton(event){
        this.setState({toggle:!this.state.toggle,
            value: event.target.value,
            id: event.target.id,
            name:event.target.name,
        })}


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
    

    componentDidUpdate(prevprops,prevstate)
    {   
    console.log("prevstate",prevstate,"this.state",this.state)
     if(prevstate.toggle===true && this.state.toggle===false)
     {
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
    }

    render()
    {

        let depModalClose=()=>this.setState({toggle:false})
        if(this.state.loggedIn === true){
            return <Redirect to="/" />
        }

        return(
            <div>
                 <Container className="themed-container" fluid="md">
                    <div className="block-example border border-dark">
                            <h1 className="text-center">Lead Dashboard</h1>
                                <br></br>
                                <Row>
                                    <Col> 
                                            <ListGroup>
                                            <ListGroupItem color='success'>New</ListGroupItem>
                                                {
                                                this.state.data.map((dynamicData,index)=>
                                            
                                                {
                                                if (dynamicData.status === "New") {
                                                    return (
                                                    <div  key={index}> 
                                                <ListGroupItem tag="button" onClick={this.toggleButton}  value={dynamicData.title} id={dynamicData.id} name={dynamicData.status} action>{dynamicData.title}</ListGroupItem>
                                                <AddDepModal show={this.state.toggle} onHide={depModalClose} value1={this.state.value} id1={this.state.id}  status1={this.state.name} />
                                                    </div>
                                                    )
                                                }})
                                            }
                                                </ListGroup>
                                    </Col>
                                    <Col> 
        
                                            <ListGroup>
                                            <ListGroupItem color='success'>Accepted</ListGroupItem>
                                                {
                                                this.state.data.map((dynamicData,index)=>
                                                {
                                                if (dynamicData.status === "Accepted") {
                                                    return (
                                                    <div key={index}> 
                                                  
                                                <ListGroupItem  tag="button" onClick={this.toggleButton}  value={dynamicData.title} id={dynamicData.id} name={dynamicData.status}  action>{dynamicData.title}</ListGroupItem>
                                                <AddDepModal show={this.state.toggle} onHide={depModalClose} value1={this.state.value}  id1={this.state.id} status1={this.state.name}/>
                                                    </div>
                                                    )
                                                }})
                                            }
                                    </ListGroup>
                                    </Col>
                                    <Col>
                                            <ListGroup>
                                            <ListGroupItem color='success'>Pitched</ListGroupItem>
                                            {
                                                this.state.data.map((dynamicData,index)=>

                                                {
                                                if (dynamicData.status === "Pitched") {
                                                    return (
                                                    <div key={index}>
                                            <ListGroupItem key={index} tag="button" onClick={this.toggleButton}  value={dynamicData.title} id={dynamicData.id} name={dynamicData.status}  action>{dynamicData.title}</ListGroupItem>
                                            <AddDepModal show={this.state.toggle} onHide={depModalClose} value1={this.state.value}  id1={this.state.id} status1={this.state.name}/>
                                                    </div>
                                                    )
                                                }})
                                            }
                                         </ListGroup>
                                    </Col>
                                    <Col>
                                    <ListGroup>
                                    <ListGroupItem color='success'>Response Generated</ListGroupItem>
                                     {
                                                this.state.data.map((dynamicData,index)=>

                                                {
                                                if (dynamicData.status === "ResponseGenerated") {
                                                    return (
                                                    <div key={index}>

                                                <ListGroupItem  tag="button" onClick={this.toggleButton}  value={dynamicData.title} id={dynamicData.id} name={dynamicData.status}  action>{dynamicData.title}</ListGroupItem>
                                                <AddDepModal show={this.state.toggle} onHide={depModalClose} value1={this.state.value}  id1={this.state.id} status1={this.state.name}/>
                                                    </div>
                                                    )
                                                }})
                                            }
                                    </ListGroup>
                                     </Col>
                                </Row>
                        </div>
                        </Container>

                </div>

        )
    }
}
export default LeadDashboard;
