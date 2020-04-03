import React  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import axios from 'axios'
import './Newlead.css'
import { Label,Form } from 'reactstrap';
class Newlead1 extends React.Component{
    
    render(){
        return(
            <div>
            <Form action="/action_page.php" method="post" id="form1">
            <Label for="fname">First name:</Label>
            <input type="text" id="fname" name="fname"></input><br></br><br></br>
            <Label for="lname">Last name:</Label>
            <input type="text" id="lname" name="lname"></input>
            <button type="button">submit</button>
             <button type="submit">submit</button>

             
            </Form>

            </div>
        )
    }
}
export default Newlead1;