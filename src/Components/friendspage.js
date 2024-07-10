import FloatingButton from './FloatingButton';
import { useTelegram } from '../useTelegram';
import './friends.css'; 


const Friends = () => {
    const {user, onClose} = useTelegram();
    const close = isClosingConfirmationEnabled;
    const copyTextToClipboard = async (text) => {
        try {
          await navigator.clipboard.writeText(text);
          console.log('Текст успешно скопирован в буфер обмена!');
        } catch (err) {
          console.error('Ошибка:', err);
        }
      };
    
    return (
        <>
        <h2>Hello <span className={'username'}>{user?.first_name}</span> 👋 <br />invite friends</h2>
        <FloatingButton onClick={() => {onClose(); copyTextToClipboard('https://t.me/AdeitaBot Присоединяйся ко мне!');}} />
        </>

    );
};
export {Friends};