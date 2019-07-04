import'./App.css';
import * as React from 'react';
import { Col, Container, Row} from 'reactstrap';
import LoginForm from './components/LoginForm';
import {Link} from 'react-router-dom';
import {setLogin} from '../../store/branches/loginBranch';
import { connect } from 'tls';

interface IProps {
  login?: string,
  password?: string,
}

export class App extends React.Component<IProps> {
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
    const name = event.target.id;

    this.setState({
      [name]: event.target.value
    });
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

const mapStateToProps = (state: any) => {
  console.log(state)
  return {
    login: state.login
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: {
      setLogin: (login: any, password: any, token: any) => {
        dispatch(setLogin(login, password, token))
      }
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
