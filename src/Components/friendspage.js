import FloatingButton from './FloatingButton';
import { useTelegram } from '../useTelegram';
import './friends.css'; 


const Friends = () => {
    const {user, onClose} = useTelegram();

    return (
        <>
        <h1>Hello <span className={'username'}>{user?.username}</span> invite friends</h1>
        <FloatingButton onClick={onClose} />
        </>

    );
};
export {Friends};