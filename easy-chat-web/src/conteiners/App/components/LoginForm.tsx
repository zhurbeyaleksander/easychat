import * as React from 'react';
import './LoginForm.css'


class LoginForm extends React.Component {
  public render() {
    return (
        <form>
       <label>
      Логин: <input type="text" name="name" />
    </label>
    <label>
      Пароль: <input type="text" name="name" />
    </label>
    <input type="submit" className="mainLoginButton" value="Войти" />
  </form>
    );
  }
}

export default LoginForm;