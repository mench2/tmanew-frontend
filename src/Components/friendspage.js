import FloatingButton from './FloatingButton';
import { useTelegram } from '../useTelegram';
import './friends.css'; 


const Friends = () => {
    const {user, onClose} = useTelegram();

    return (
        <>
        <a>Ada</a>
        <FloatingButton onClick={onClose}>
            <span className={'username'}>{user?.username}</span>
        </FloatingButton>
        </>

    );
};
export {Friends};