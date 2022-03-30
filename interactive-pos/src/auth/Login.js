import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onSignIn, base }) {

    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    function signIn(evt) {
        evt.preventDefault();
        if (formData.username.trim() != "" && formData.password.trim() !== "") {
            setMessage(null);
            fetch(`${base}/db.json`).then(resp => resp.json()).then(({ users }) => {
                const user = users.find(u => u.username === formData.username && u.password === formData.password);
                if (user) {
                    onSignIn(user);
                    navigate("order");
                }
                else{
                    setMessage("Invalid username or password");
                }
            });
        }

    }

    function setField(event) {
        const name = event.target.name;
        console.log(name)
        const value = event.target.value;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div className="pos-display-flex pos-flex-justify-center pos-flex-column pos-flex-justify-between pos-page">
            <form id="login" className="pos-align-self-center pos-card pos-w-30" onSubmit={signIn}>
                <div className="pos-card-header">
                    <h3>Sign In</h3>
                </div>
                <hr />
                <div className="pos-card-body">
                    {message && <div style={{color:"red"}}>{message}</div>}
                    <div className="form-group pos-w-100">
                        <label>Username</label>
                        <input type="text" name="username" value={formData.username} onChange={setField} className="pos-w-90" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" value={formData.password} onChange={setField} className="pos-w-90" />
                    </div>
                </div>
                <div className="pos-card-footer">
                    <button className="pos-btn">Sign In</button>
                </div>
            </form>
        </div>

    );
}

export default Login;