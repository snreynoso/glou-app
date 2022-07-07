import { useState, useEffect} from 'react';
import axios from 'axios';

const Login = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [token, setToken] = useState('');

    // Save new token value
    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(token));
    }, [token]);

    const onFormSubmit = (event) => {
        // Prevent page refresh
        event.preventDefault();

        // POST request to log in an get the TOKEN
        axios.post('https://glou-back.herokuapp.com/auth', {
            email: values.email,
            password: values.password
        }).then((response) => {
            setToken(response.data.accessToken);
        });
    }

    const onInputChange = (event) => {
        // Get values from the input tags
        const { target } = event;
        const { name, value } = target;
        // Clone the curren state and only change the value of the event that change
        const newValues = { ...values, [name]: value };
        // Save new values in the state
        setValues(newValues);
    }

    return (
        <div className="ui two column centered grid" style={{ marginTop: '20px' }}>
            <div className="ui column segment">
                <h2>
                    Bienvenido a Glou App
                </h2>
                <form className="ui  form" onSubmit={onFormSubmit}>
                    <div className="ui field">
                        <label htmlFor="name">Usuario</label>
                        <input
                            id="name"
                            name="email"
                            type="text"
                            value={values.email}
                            onChange={onInputChange}
                            placeholder="Ingrese su Email"
                        />
                        <label htmlFor="password">Constraseña</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={values.password}
                            onChange={onInputChange}
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