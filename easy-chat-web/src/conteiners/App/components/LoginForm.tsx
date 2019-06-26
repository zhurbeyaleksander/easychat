import * as React from 'react';
import './LoginForm.css'


function LoginForm () {
    return (
      <div>
        <form>
          <div className="form-group">
            <input type="text" className="form-control mainLoginInput" id="login" placeholder="Логин" />
            <input type="password" className="form-control mainLoginInput" id="password" placeholder="Пароль" />
            <button type="button" className="btn btn-dark mainLoginButton">Easy Go </button>
          </div>
        </form>
      </div>
    );
}

export default LoginForm;