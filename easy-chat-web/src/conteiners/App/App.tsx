import'./App.css';
import * as React from 'react';
import { Col, Container, Row} from 'reactstrap';
import LoginForm from './components/LoginForm';
import {Link} from 'react-router-dom';
import {setLogin} from '../../store/branches/loginBranch';
import { connect } from 'react-redux';
import {LoginProps} from '../../models/loginModels';

type Props = LoginProps;

export interface State {
  login: any,
  password?: any
}

export class App extends React.Component<Props, State> {
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

 // const mapStateToProps = (store: any) => {
  // console.log('test');
  // console.log(store);
  // return {
    // login: store.login.login,
  // }
// };



const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: {
      setLogin: (login: any, password: any, token: any) => {
        dispatch(setLogin(login, password, token))
      }
    }
  }
};

export const StartPage = connect(mapDispatchToProps)(App);
