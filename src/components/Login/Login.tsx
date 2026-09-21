import { useState } from "react";
import adminService from '../../services/adminService';
import type { AdminSession } from '../../types/admin';
import MessageBox from '../MessageBox/MessageBox';
import './Login.css';

interface LoginProps {
    onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState<'error' | 'success'>('error');

    const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          adminService.postLogin({ email, password })
            .then(data => {
                if (!data.token) {
                    setMessage("Tarkista sähköposti tai salasana.");
                    setMessageType('error');
                    return;
                }
                const admindata: AdminSession = {
                    ...data,
                    expiresAt: Date.now() + 1000 * 60 * 60
                };
                adminService.setToken(data.token);
                onLogin();
                setMessage(`Tervetuloa, ${admindata.user.username}!`);
                setMessageType('success');
                window.localStorage.setItem('admin', JSON.stringify(admindata)); 
            })
            .catch(() => {
                setMessage("Tarkista sähköposti tai salasana.");
                setMessageType('error');
            });
    }

    return (
        <div className="login__container">
            <h2>Login</h2>
            <form 
                action="" 
                onSubmit={loginHandler}
                className="login__form"
            >
                <label htmlFor="email" className="login__label">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={e=>setEmail(e.target.value)} 
                    autoComplete="email"
                    className="login__input"
                />
                <label htmlFor="password" className="login__label">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={e=>setPassword(e.target.value)}
                    autoComplete="current-password"
                    className="login__input"
                />
                <div className="login__message">
                    <MessageBox message={message} type={messageType} />
                </div>
                <button 
                    type="submit"
                    className="login__button"
                >Login</button>
            </form>
        </div>
    )
}
export default Login;