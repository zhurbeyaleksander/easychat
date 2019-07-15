import * as React from 'react';
import './LoginForm.css';

interface Props {
  submitLogin?: () => void;
  onChangeForm?: (event: any) => void;
};

function LoginForm ({submitLogin, onChangeForm}:Props) {
    return (
      <div>
        <form>
          <div className="form-group">
            <input type="text"
             onChange={onChangeForm} 
             className="form-control mainLoginInput"
              id="login" placeholder="логин | телефон"
               />
            <input 
            type="password"
            onChange={onChangeForm}
             className="form-control mainLoginInput"
              id="password" placeholder="пароль" />
            <button onClick={submitLogin} type="button" className="btn btn-dark mainLoginButton">Easy Go </button>
          </div>
        </form>
      </div>
    );
}

export default LoginForm;