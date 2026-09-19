import { useState } from "react";
import adminService from '../../services/adminService';
import type { AdminSession } from '../../types/admin';

interface LoginProps {
    onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    // const [messageType, setMessageType] = useState("");

    const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          adminService.postLogin({ email, password })
            .then(data => {
                if (!data.token) {
                    setMessage("Kirjautuminen epäonnistui.");
                    // setMessageType('error');
                    return;
                }
                const admindata: AdminSession = {
                    ...data,
                    expiresAt: Date.now() + 1000 * 60 * 60
                };
                adminService.setToken(data.token);
                onLogin();
                setMessage(`Tervetuloa, ${admindata.user.username}!`);
                // setMessageType('success');
                window.localStorage.setItem('admin', JSON.stringify(admindata)); 
            })
            .catch(() => {
                setMessage("Kirjautuminen epäonnistui. Tarkista sähköposti tai salasana.");
                // setMessageType('error');
            });
    }

    return (
        <div className="inner-container">
            <h2>Login</h2>
            <div>
                <h3>{message}</h3>
            </div>
            <form 
                action="" 
                onSubmit={loginHandler}
                className="login-form"
            >
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={e=>setEmail(e.target.value)} 
                    autoComplete="email"
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={e=>setPassword(e.target.value)}
                    autoComplete="current-password" 
                />
                <button 
                    type="submit"
                    className="submit-button"
                >Login</button>
            </form>
        </div>
    )
}
export default Login;