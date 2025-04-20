const tg = window.Telegram.WebApp;

export function useTelegram() {
    const user = tg.initDataUnsafe?.user;
    const userId = user?.id.toString();

    return {
        tg,
        user,
        userId
    }
} 