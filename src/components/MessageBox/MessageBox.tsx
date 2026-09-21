import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faExclamation, faCheck } from '@fortawesome/free-solid-svg-icons';
import './MessageBox.css';

interface MessageBoxProps {
    message: string;
    type: 'error' | 'success';
}

const MessageBox = ({ message, type }: MessageBoxProps) => {
    if (!message) return null;

    return (
        <div className='message__box'>
            <FontAwesomeIcon 
                icon={type === 'error' ? faExclamation : faCheck} 
                className="message__icon"
            />
            <p className={`message message--${type}`}>
                {message}
            </p>
        </div>
    )
}

export default MessageBox;