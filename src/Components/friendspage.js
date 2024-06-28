import FloatingButton from './FloatingButton';
import './friends.css'; 
const tg = window.Telegram.WebApp


const Friends = () => {
    const onClose = () => {
        tg.close()
    }
    return (
        <>
        <FloatingButton onClick={onClose} />
        </>
    );
};
export {Friends};