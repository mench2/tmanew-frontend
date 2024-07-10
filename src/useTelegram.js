const tg = window.Telegram.WebApp;

export function useTelegram() {

    const onClose = () => {
        tg.close()
    }
    const close = () => {
        tg.isVerticalSwipesEnabled(true);
    }
    
    return {
        close,
        onClose,
        tg,
        user: tg.initDataUnsafe?.user,
    }




}