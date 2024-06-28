import FloatingButton from './FloatingButton';
import './friends.css'; 
const tg = window.Telegram.WebApp

const Friends = () => {
    const onClose = () => {
        tg.close()
    }
    return (
        <>
        <div>
            <button onClick={onClose}>Press f</button>
        </div>
        <FloatingButton onClick={onClose} />
        </>
    );
};
export {Friends};