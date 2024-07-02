import FloatingButton from './FloatingButton';
import { useTelegram } from '../useTelegram';
import './friends.css'; 


const Friends = () => {
    const {user, onClose} = useTelegram();

    return (
        <>
        <h2>Hello <span className={'username'}>{user?.username}</span> 👋 <br />invite friends</h2>
        <FloatingButton onClick={onClose} />
        </>

    );
};
export {Friends};