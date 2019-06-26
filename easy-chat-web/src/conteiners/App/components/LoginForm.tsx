import * as React from 'react';
import './LoginForm.css'


class LoginForm extends React.Component {
  public render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <input type="text" className="form-control mainLoginInput" id="login" placeholder="Логин" />
            <input type="password" className="form-control mainLoginInput" id="password" placeholder="Пароль" />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;