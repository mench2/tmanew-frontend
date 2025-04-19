import './Components/tg.css';
const tg = window.Telegram.WebApp;


export function useTelegram() {
    const onClose = () => {
        tg.close()
    }
    
    return {
        onClose,
        tg,
        user: tg.initDataUnsafe?.user,
    }
}