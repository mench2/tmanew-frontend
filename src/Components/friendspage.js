import FloatingButton from './FloatingButton';
import './friends.css'; 

const Friends = () => {
    const tg = window.Telegram.WebApp

    const onClose = () => {
        tg.close()
    }
    return (
        <>
        <span className={'username'}>
            {tg.initDataUnsafe?.ueer.username}
        </span>
        <FloatingButton onClick={onClose} />
        </>
    );
};
export {Friends};