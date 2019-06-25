import * as React from 'react';
import './LoginForm.css'


class LoginForm extends React.Component {
  public render() {
    return (
        <form>
       <input className="mainLoginInput" type="text" placeholder="Логин" name="name" />
       <input className="mainLoginInput" type="password" placeholder="Пароль" name="name" />
       <br/><br/>
       <input type="submit" className="mainLoginButton" value="Войти" />
       </form>
    );
  }
}

export default LoginForm;