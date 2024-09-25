import FloatingButton from './FloatingButton';
import { useTelegram } from '../useTelegram';
import './friends.css'; 


const Friends = () => {
    const {user, onClose} = useTelegram();
    const copyTextToClipboard = async (text) => {
        try {
          await navigator.clipboard.writeText(text);
          console.log('Ты кто такой, я тебя не звал!');
        } catch (err) {
          console.err('Ошибка:', err);
        }
      };
    
    return (
        <>
        <div className='hello'><h2>Hello <span className={'username'}>{user?.first_name}</span> 👋 <br />invite friends</h2></div>
        <div className='spisok'></div>
        <FloatingButton onClick={() => {onClose(); copyTextToClipboard('https://t.me/AdeitaBot Присоединяйся ко мне!');}} />
        </>

    );
};
export {Friends};