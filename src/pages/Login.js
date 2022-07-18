
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../reducers/user/userSlice';
import axios from 'axios';

const Login = () => {
  const emailField = useRef(null);
  const passwordField = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFormSubmit = async event => {
    // Prevent page refresh
    event.preventDefault();

    // POST request to log in an get the TOKEN
    await axios.post('https://glou-back.herokuapp.com/auth', {
      email: emailField.current.value,
      password: passwordField.current.value
    }).then(response => {
      // Save user data in redux store
      dispatch(setUser({
        email: emailField.current.value,
        password: passwordField.current.value,
        token: response.data.accessToken
      }));
      // Go to budget creation page
      navigate("../budget/budget-creation", { replace: true });
    }).catch(err => {
      console.log(err);
      alert("Usuario o contraseña no validos")
    });
  }

  return (
    <div className="ui two column centered grid" style={{ marginTop: '20px' }}>
      <div className="ui column segment">
        <h2>
          Bienvenido a Glou App
        </h2>
        <form className="ui  form" onSubmit={onFormSubmit}>
          <div className="ui field">
            <label>Usuario</label>
            <input
              type="text"
              ref={emailField}
              placeholder="Ingrese su Email"
            />
            <label>Constraseña</label>
            <input
              ref={passwordField}
              type="password"
              placeholder="Ingrese su Contraseña"
            />
          </div>
          <input className="ui primary button" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;