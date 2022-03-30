
function Login() {
    return (
        <div className="pos-display-flex pos-flex-justify-center pos-flex-column pos-flex-justify-between pos-page">
            <form id="login" className="pos-align-self-center pos-card">
                <div className="pos-card-header">
                    <h3>Sign In</h3>
                </div>
                <hr />
                <div className="pos-card-header">
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" />
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