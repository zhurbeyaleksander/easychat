import'./App.css';
import * as React from 'react';
import { Col, Container, Row} from 'reactstrap';
import LoginForm from './components/LoginForm';
import {Link, RouteComponentProps} from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState, ConnectedReduxProps } from '../../store';
import { Login } from '../../store/login/types';

type Props = RouteComponentProps<{}> & ConnectedReduxProps & Login; 

export class App extends React.Component<Props> {
  constructor(props: any) {
    super(props);
    this.state = {
      login: null,
      password: null,
    }
  }

  public componentDidUpdate() {
    console.log(this.state)
  }

  private handleLoginForm = () => {
    console.log('');
  }

  private handleLoginFormChange = (event: any) => {
   console.log('---')
  } 

  public render() {
    return (
      <div className="mainPageText">
   <Container>
     <Row>
       <Col xs="6" sm="6" md="6"  lg="6" xl="6">
         <b>Easy</b> Chat - новый способ общения с друзьями
         </Col>
       <Col className="mainLogin" xs="6" sm="6" md="6"  lg="6" xl="6">
       <LoginForm 
       submitLogin={this.handleLoginForm}
       onChangeForm={this.handleLoginFormChange}
       />
       <Link to="/registration">Регистрация</Link>
       </Col>
     </Row>
   </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ login }: ApplicationState) => {
  console.log('test');
  return {
    login: login.login,
    password: login.password,
  }
};



export default connect<{},{},{}>(mapStateToProps)(App);