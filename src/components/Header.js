import { useDispatch } from "react-redux/es/exports";
import { unsetUser } from "../reducers/user/userSlice";
import { useNavigate } from 'react-router-dom';


const Header = ({title}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickLogout = () => {
        // Delete user data from redux
        dispatch(unsetUser());

        // Return to login page
        navigate("/");
    };

    return (
        <div className="ui header">
            <div class="ui grid">
                <div className="ui left floated six wide column">
                    <h1>{title}</h1>
                </div>

                <div className="ui right floated six wide column">
                    <button className="ui red right floated button" onClick={onClickLogout} style={{ marginTop: '5px' }}>Salir</button>
                </div>
            </div>
        </div>
    );
}

export default Header; 