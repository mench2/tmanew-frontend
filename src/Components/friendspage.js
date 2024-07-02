import FloatingButton from './FloatingButton';
import { useTelegram } from '../useTelegram';
import './friends.css'; 


const Friends = () => {
    const {user, onClose} = useTelegram();

    return (
        <>
        <h1>Ada</h1>
        <FloatingButton onClick={onClose}>
            <span className={'username'}>{user?.username}</span>
        </FloatingButton>
        </>

    );
};
export {Friends};