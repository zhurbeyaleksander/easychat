import'./App.css';
import * as React from 'react';
import { Col, Container, Row} from 'reactstrap';
import LoginForm from './components/LoginForm';
import {Link} from 'react-router-dom';

export class App extends React.Component {
  public render() {
    return (
      <div className="container headText">
   <Container>
     <Row>
       <Col xs="6" sm="6" md="6"  lg="6" xl="6">
         <b>Easy</b> Chat - новый способ общения с друзьями
         </Col>
       <Col className="mainLogin" xs="6" sm="6" md="6"  lg="6" xl="6">
       <LoginForm/>
       <Link to="/registration">Регистрация</Link>
       </Col>
     </Row>
   </Container>
      </div>
    );
  }
}

export default App;
