import './Components/tg.css';
const tg = window.Telegram.WebApp;


export function useTelegram() {

    backgroundColor

    const onClose = () => {
        tg.close()
    }
    
    return {
        onClose,
        tg,
        user: tg.initDataUnsafe?.user,
    }




}