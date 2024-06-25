import React from 'react';


const Login: React.FC = () => {
  return (
    <div className='login-container'>
      <div className='login-form'>
        <div className='form-group'>
          <strong>Usuário/Email</strong>
        </div>
        <div className='form-group'>
          <input type="text" className='input-field' />
        </div>
        <div className='form-group'>
          <strong>Senha</strong>
        </div>
        <div className='form-group'>
          <input type="password" className='input-field' />
        </div>
        <div className='form-group'>
          <button className='cad-button'>Cadastro</button>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
